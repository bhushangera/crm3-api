import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SerialNumbers } from '.'

const app = () => express(apiRoot, routes)

let serialNumbers

beforeEach(async () => {
  serialNumbers = await SerialNumbers.create({})
})

test('POST /SerialNumbers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /SerialNumbers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /SerialNumbers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${serialNumbers.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(serialNumbers.id)
})

test('GET /SerialNumbers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /SerialNumbers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${serialNumbers.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(serialNumbers.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /SerialNumbers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /SerialNumbers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${serialNumbers.id}`)
  expect(status).toBe(204)
})

test('DELETE /SerialNumbers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
