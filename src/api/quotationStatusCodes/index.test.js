import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { QuotationStatusCodes } from '.'

const app = () => express(apiRoot, routes)

let quotationStatusCodes

beforeEach(async () => {
  quotationStatusCodes = await QuotationStatusCodes.create({})
})

test('POST /quotationStatusCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /quotationStatusCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /quotationStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${quotationStatusCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(quotationStatusCodes.id)
})

test('GET /quotationStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /quotationStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${quotationStatusCodes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(quotationStatusCodes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /quotationStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /quotationStatusCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${quotationStatusCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /quotationStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
