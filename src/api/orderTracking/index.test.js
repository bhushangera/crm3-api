import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { OrderTracking } from '.'

const app = () => express(apiRoot, routes)

let orderTracking

beforeEach(async () => {
  orderTracking = await OrderTracking.create({})
})

test('POST /orderTracking 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ sanctioned: 'test', SanctionedRemarks: 'test', scheduled: 'test', scheduledRemarks: 'test', inProduction: 'test', PriductionRemarks: 'test', inQA: 'test', QARemakrs: 'test', inPackaging: 'test', PackagingRemarks: 'test', clearance: 'test', ClaranceRemarks: 'test', shipped: 'test', ShipmentRemakrs: 'test', shippingDocument: 'test', shippingDetails: 'test', delivered: 'test', deliveryReport: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.sanctioned).toEqual('test')
  expect(body.SanctionedRemarks).toEqual('test')
  expect(body.scheduled).toEqual('test')
  expect(body.scheduledRemarks).toEqual('test')
  expect(body.inProduction).toEqual('test')
  expect(body.PriductionRemarks).toEqual('test')
  expect(body.inQA).toEqual('test')
  expect(body.QARemakrs).toEqual('test')
  expect(body.inPackaging).toEqual('test')
  expect(body.PackagingRemarks).toEqual('test')
  expect(body.clearance).toEqual('test')
  expect(body.ClaranceRemarks).toEqual('test')
  expect(body.shipped).toEqual('test')
  expect(body.ShipmentRemakrs).toEqual('test')
  expect(body.shippingDocument).toEqual('test')
  expect(body.shippingDetails).toEqual('test')
  expect(body.delivered).toEqual('test')
  expect(body.deliveryReport).toEqual('test')
})

test('GET /orderTracking 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /orderTracking/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${orderTracking.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderTracking.id)
})

test('GET /orderTracking/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /orderTracking/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${orderTracking.id}`)
    .send({ sanctioned: 'test', SanctionedRemarks: 'test', scheduled: 'test', scheduledRemarks: 'test', inProduction: 'test', PriductionRemarks: 'test', inQA: 'test', QARemakrs: 'test', inPackaging: 'test', PackagingRemarks: 'test', clearance: 'test', ClaranceRemarks: 'test', shipped: 'test', ShipmentRemakrs: 'test', shippingDocument: 'test', shippingDetails: 'test', delivered: 'test', deliveryReport: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderTracking.id)
  expect(body.sanctioned).toEqual('test')
  expect(body.SanctionedRemarks).toEqual('test')
  expect(body.scheduled).toEqual('test')
  expect(body.scheduledRemarks).toEqual('test')
  expect(body.inProduction).toEqual('test')
  expect(body.PriductionRemarks).toEqual('test')
  expect(body.inQA).toEqual('test')
  expect(body.QARemakrs).toEqual('test')
  expect(body.inPackaging).toEqual('test')
  expect(body.PackagingRemarks).toEqual('test')
  expect(body.clearance).toEqual('test')
  expect(body.ClaranceRemarks).toEqual('test')
  expect(body.shipped).toEqual('test')
  expect(body.ShipmentRemakrs).toEqual('test')
  expect(body.shippingDocument).toEqual('test')
  expect(body.shippingDetails).toEqual('test')
  expect(body.delivered).toEqual('test')
  expect(body.deliveryReport).toEqual('test')
})

test('PUT /orderTracking/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ sanctioned: 'test', SanctionedRemarks: 'test', scheduled: 'test', scheduledRemarks: 'test', inProduction: 'test', PriductionRemarks: 'test', inQA: 'test', QARemakrs: 'test', inPackaging: 'test', PackagingRemarks: 'test', clearance: 'test', ClaranceRemarks: 'test', shipped: 'test', ShipmentRemakrs: 'test', shippingDocument: 'test', shippingDetails: 'test', delivered: 'test', deliveryReport: 'test' })
  expect(status).toBe(404)
})

test('DELETE /orderTracking/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${orderTracking.id}`)
  expect(status).toBe(204)
})

test('DELETE /orderTracking/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
