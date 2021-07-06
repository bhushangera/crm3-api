import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { BatchNumbers } from '.'

const app = () => express(apiRoot, routes)

let batchNumbers

beforeEach(async () => {
  batchNumbers = await BatchNumbers.create({})
})

test('POST /BatchNumbers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /BatchNumbers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /BatchNumbers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${batchNumbers.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(batchNumbers.id)
})

test('GET /BatchNumbers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /BatchNumbers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${batchNumbers.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(batchNumbers.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /BatchNumbers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /BatchNumbers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${batchNumbers.id}`)
  expect(status).toBe(204)
})

test('DELETE /BatchNumbers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
