import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { OrderPayment } from '.'

const app = () => express(apiRoot, routes)

let orderPayment

beforeEach(async () => {
  orderPayment = await OrderPayment.create({})
})

test('POST /orderPayment 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ orderId: 'test', orderAmount: 'test', paymentDate: 'test', paymentMode: 'test', ChequeNo: 'test', ChequeDate: 'test', ChequeDetails: 'test', OnlineTransactionId: 'test', amount: 'test', remarks: 'test', postedById: 'test', postedBy: 'test', : 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.orderId).toEqual('test')
  expect(body.orderAmount).toEqual('test')
  expect(body.paymentDate).toEqual('test')
  expect(body.paymentMode).toEqual('test')
  expect(body.ChequeNo).toEqual('test')
  expect(body.ChequeDate).toEqual('test')
  expect(body.ChequeDetails).toEqual('test')
  expect(body.OnlineTransactionId).toEqual('test')
  expect(body.amount).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.postedById).toEqual('test')
  expect(body.postedBy).toEqual('test')
  expect(body.).toEqual('test')
})

test('GET /orderPayment 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /orderPayment/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${orderPayment.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderPayment.id)
})

test('GET /orderPayment/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /orderPayment/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${orderPayment.id}`)
    .send({ orderId: 'test', orderAmount: 'test', paymentDate: 'test', paymentMode: 'test', ChequeNo: 'test', ChequeDate: 'test', ChequeDetails: 'test', OnlineTransactionId: 'test', amount: 'test', remarks: 'test', postedById: 'test', postedBy: 'test', : 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderPayment.id)
  expect(body.orderId).toEqual('test')
  expect(body.orderAmount).toEqual('test')
  expect(body.paymentDate).toEqual('test')
  expect(body.paymentMode).toEqual('test')
  expect(body.ChequeNo).toEqual('test')
  expect(body.ChequeDate).toEqual('test')
  expect(body.ChequeDetails).toEqual('test')
  expect(body.OnlineTransactionId).toEqual('test')
  expect(body.amount).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.postedById).toEqual('test')
  expect(body.postedBy).toEqual('test')
  expect(body.).toEqual('test')
})

test('PUT /orderPayment/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ orderId: 'test', orderAmount: 'test', paymentDate: 'test', paymentMode: 'test', ChequeNo: 'test', ChequeDate: 'test', ChequeDetails: 'test', OnlineTransactionId: 'test', amount: 'test', remarks: 'test', postedById: 'test', postedBy: 'test', : 'test' })
  expect(status).toBe(404)
})

test('DELETE /orderPayment/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${orderPayment.id}`)
  expect(status).toBe(204)
})

test('DELETE /orderPayment/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
