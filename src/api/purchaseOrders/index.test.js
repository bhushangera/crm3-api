import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PurchaseOrders } from '.'

const app = () => express(apiRoot, routes)

let purchaseOrders

beforeEach(async () => {
  purchaseOrders = await PurchaseOrders.create({})
})

test('POST /purchaseOrders 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /purchaseOrders 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /purchaseOrders/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${purchaseOrders.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(purchaseOrders.id)
})

test('GET /purchaseOrders/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /purchaseOrders/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${purchaseOrders.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(purchaseOrders.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /purchaseOrders/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /purchaseOrders/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${purchaseOrders.id}`)
  expect(status).toBe(204)
})

test('DELETE /purchaseOrders/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
