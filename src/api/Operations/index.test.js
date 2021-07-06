import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Operations } from '.'

const app = () => express(apiRoot, routes)

let operations

beforeEach(async () => {
  operations = await Operations.create({})
})

test('POST /Operations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Operations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Operations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${operations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(operations.id)
})

test('GET /Operations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Operations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${operations.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(operations.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Operations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Operations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${operations.id}`)
  expect(status).toBe(204)
})

test('DELETE /Operations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
