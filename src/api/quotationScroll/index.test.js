import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { QuotationScroll } from '.'

const app = () => express(apiRoot, routes)

let quotationScroll

beforeEach(async () => {
  quotationScroll = await QuotationScroll.create({})
})

test('POST /quotationScroll 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /quotationScroll 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /quotationScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${quotationScroll.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(quotationScroll.id)
})

test('GET /quotationScroll/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /quotationScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${quotationScroll.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(quotationScroll.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /quotationScroll/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /quotationScroll/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${quotationScroll.id}`)
  expect(status).toBe(204)
})

test('DELETE /quotationScroll/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
