import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { StatusReasons } from '.'

const app = () => express(apiRoot, routes)

let statusReasons

beforeEach(async () => {
  statusReasons = await StatusReasons.create({})
})

test('POST /statusReasons 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /statusReasons 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /statusReasons/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${statusReasons.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(statusReasons.id)
})

test('GET /statusReasons/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /statusReasons/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${statusReasons.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(statusReasons.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /statusReasons/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /statusReasons/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${statusReasons.id}`)
  expect(status).toBe(204)
})

test('DELETE /statusReasons/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
