import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Order } from '.'

const app = () => express(apiRoot, routes)

let order

beforeEach(async () => {
  order = await Order.create({})
})

test('POST /order 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ datePlaced: 'test', timePlaced: 'test', UserId: 'test', PrderDetails: 'test', OrderAmount: 'test', GSTAmount: 'test', ShippingAmount: 'test', TotalValue: 'test', BillToParty: 'test', ShipToParty: 'test', PaidByParty: 'test', BillingAddressId: 'test', ShippingAddressId: 'test', OrderRemarks: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.datePlaced).toEqual('test')
  expect(body.timePlaced).toEqual('test')
  expect(body.UserId).toEqual('test')
  expect(body.PrderDetails).toEqual('test')
  expect(body.OrderAmount).toEqual('test')
  expect(body.GSTAmount).toEqual('test')
  expect(body.ShippingAmount).toEqual('test')
  expect(body.TotalValue).toEqual('test')
  expect(body.BillToParty).toEqual('test')
  expect(body.ShipToParty).toEqual('test')
  expect(body.PaidByParty).toEqual('test')
  expect(body.BillingAddressId).toEqual('test')
  expect(body.ShippingAddressId).toEqual('test')
  expect(body.OrderRemarks).toEqual('test')
})

test('GET /order 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /order/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${order.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(order.id)
})

test('GET /order/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /order/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${order.id}`)
    .send({ datePlaced: 'test', timePlaced: 'test', UserId: 'test', PrderDetails: 'test', OrderAmount: 'test', GSTAmount: 'test', ShippingAmount: 'test', TotalValue: 'test', BillToParty: 'test', ShipToParty: 'test', PaidByParty: 'test', BillingAddressId: 'test', ShippingAddressId: 'test', OrderRemarks: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(order.id)
  expect(body.datePlaced).toEqual('test')
  expect(body.timePlaced).toEqual('test')
  expect(body.UserId).toEqual('test')
  expect(body.PrderDetails).toEqual('test')
  expect(body.OrderAmount).toEqual('test')
  expect(body.GSTAmount).toEqual('test')
  expect(body.ShippingAmount).toEqual('test')
  expect(body.TotalValue).toEqual('test')
  expect(body.BillToParty).toEqual('test')
  expect(body.ShipToParty).toEqual('test')
  expect(body.PaidByParty).toEqual('test')
  expect(body.BillingAddressId).toEqual('test')
  expect(body.ShippingAddressId).toEqual('test')
  expect(body.OrderRemarks).toEqual('test')
})

test('PUT /order/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ datePlaced: 'test', timePlaced: 'test', UserId: 'test', PrderDetails: 'test', OrderAmount: 'test', GSTAmount: 'test', ShippingAmount: 'test', TotalValue: 'test', BillToParty: 'test', ShipToParty: 'test', PaidByParty: 'test', BillingAddressId: 'test', ShippingAddressId: 'test', OrderRemarks: 'test' })
  expect(status).toBe(404)
})

test('DELETE /order/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${order.id}`)
  expect(status).toBe(204)
})

test('DELETE /order/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
