import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { OrderScroll } from '.'

const app = () => express(apiRoot, routes)

let orderScroll

beforeEach(async () => {
  orderScroll = await OrderScroll.create({})
})

test('POST /orderScroll 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ orderId: 'test', SKUId: 'test', PIId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.orderId).toEqual('test')
  expect(body.SKUId).toEqual('test')
  expect(body.PIId).toEqual('test')
  expect(body.Price).toEqual('test')
  expect(body.discount).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.GSTAmount).toEqual('test')
  expect(body.Qty).toEqual('test')
  expect(body.shipping).toEqual('test')
  expect(body.totalAmount).toEqual('test')
})

test('GET /orderScroll 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /orderScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${orderScroll.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderScroll.id)
})

test('GET /orderScroll/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /orderScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${orderScroll.id}`)
    .send({ orderId: 'test', SKUId: 'test', PIId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderScroll.id)
  expect(body.orderId).toEqual('test')
  expect(body.SKUId).toEqual('test')
  expect(body.PIId).toEqual('test')
  expect(body.Price).toEqual('test')
  expect(body.discount).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.GSTAmount).toEqual('test')
  expect(body.Qty).toEqual('test')
  expect(body.shipping).toEqual('test')
  expect(body.totalAmount).toEqual('test')
})

test('PUT /orderScroll/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ orderId: 'test', SKUId: 'test', PIId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test' })
  expect(status).toBe(404)
})

test('DELETE /orderScroll/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${orderScroll.id}`)
  expect(status).toBe(204)
})

test('DELETE /orderScroll/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
