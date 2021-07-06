import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Routing } from '.'

const app = () => express(apiRoot, routes)

let routing

beforeEach(async () => {
  routing = await Routing.create({})
})

test('POST /Routing 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Routing 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Routing/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${routing.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(routing.id)
})

test('GET /Routing/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Routing/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${routing.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(routing.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Routing/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Routing/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${routing.id}`)
  expect(status).toBe(204)
})

test('DELETE /Routing/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
