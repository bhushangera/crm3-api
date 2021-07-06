import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SalesOrders } from '.'

const app = () => express(apiRoot, routes)

let salesOrders

beforeEach(async () => {
  salesOrders = await SalesOrders.create({})
})

test('POST /SalesOrders 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /SalesOrders 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /SalesOrders/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${salesOrders.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salesOrders.id)
})

test('GET /SalesOrders/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /SalesOrders/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${salesOrders.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salesOrders.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /SalesOrders/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /SalesOrders/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${salesOrders.id}`)
  expect(status).toBe(204)
})

test('DELETE /SalesOrders/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
