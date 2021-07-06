import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Counters } from '.'

const app = () => express(apiRoot, routes)

let counters

beforeEach(async () => {
  counters = await Counters.create({})
})

test('POST /counters 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', prefix: 'test', description: 'test', start: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.prefix).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.start).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /counters 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /counters/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${counters.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(counters.id)
})

test('GET /counters/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /counters/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${counters.id}`)
    .send({ code: 'test', prefix: 'test', description: 'test', start: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(counters.id)
  expect(body.code).toEqual('test')
  expect(body.prefix).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.start).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /counters/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', prefix: 'test', description: 'test', start: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /counters/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${counters.id}`)
  expect(status).toBe(204)
})

test('DELETE /counters/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
