import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Saas } from '.'

const app = () => express(apiRoot, routes)

let saas

beforeEach(async () => {
  saas = await Saas.create({})
})

test('POST /saas 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /saas 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /saas/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${saas.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(saas.id)
})

test('GET /saas/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /saas/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${saas.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(saas.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /saas/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /saas/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${saas.id}`)
  expect(status).toBe(204)
})

test('DELETE /saas/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
