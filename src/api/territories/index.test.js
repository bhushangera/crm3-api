import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Territories } from '.'

const app = () => express(apiRoot, routes)

let territories

beforeEach(async () => {
  territories = await Territories.create({})
})

test('POST /territories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', name: 'test', stateId: 'test', state: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.stateId).toEqual('test')
  expect(body.state).toEqual('test')
})

test('GET /territories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /territories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${territories.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(territories.id)
})

test('GET /territories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /territories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${territories.id}`)
    .send({ code: 'test', name: 'test', stateId: 'test', state: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(territories.id)
  expect(body.code).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.stateId).toEqual('test')
  expect(body.state).toEqual('test')
})

test('PUT /territories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', name: 'test', stateId: 'test', state: 'test' })
  expect(status).toBe(404)
})

test('DELETE /territories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${territories.id}`)
  expect(status).toBe(204)
})

test('DELETE /territories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
