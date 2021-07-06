import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PaymentTerms } from '.'

const app = () => express(apiRoot, routes)

let paymentTerms

beforeEach(async () => {
  paymentTerms = await PaymentTerms.create({})
})

test('POST /PaymentTerms 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /PaymentTerms 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /PaymentTerms/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${paymentTerms.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(paymentTerms.id)
})

test('GET /PaymentTerms/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /PaymentTerms/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${paymentTerms.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(paymentTerms.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /PaymentTerms/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /PaymentTerms/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${paymentTerms.id}`)
  expect(status).toBe(204)
})

test('DELETE /PaymentTerms/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
