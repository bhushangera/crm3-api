import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PaymentModes } from '.'

const app = () => express(apiRoot, routes)

let paymentModes

beforeEach(async () => {
  paymentModes = await PaymentModes.create({})
})

test('POST /PaymentModes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /PaymentModes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /PaymentModes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${paymentModes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(paymentModes.id)
})

test('GET /PaymentModes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /PaymentModes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${paymentModes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(paymentModes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /PaymentModes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /PaymentModes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${paymentModes.id}`)
  expect(status).toBe(204)
})

test('DELETE /PaymentModes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
