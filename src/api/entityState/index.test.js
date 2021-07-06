import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { EntityState } from '.'

const app = () => express(apiRoot, routes)

let entityState

beforeEach(async () => {
  entityState = await EntityState.create({})
})

test('POST /entityStates 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /entityStates 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /entityStates/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${entityState.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(entityState.id)
})

test('GET /entityStates/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /entityStates/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${entityState.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(entityState.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /entityStates/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /entityStates/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${entityState.id}`)
  expect(status).toBe(204)
})

test('DELETE /entityStates/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
