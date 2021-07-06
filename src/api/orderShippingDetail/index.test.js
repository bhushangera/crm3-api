import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { OrderShippingDetail } from '.'

const app = () => express(apiRoot, routes)

let orderShippingDetail

beforeEach(async () => {
  orderShippingDetail = await OrderShippingDetail.create({})
})

test('POST /orderShippingDetail 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ OrderId: 'test', status: 'test', ShippedDate: 'test', ShippedTime: 'test', ShippingPartyId: 'test', ShippingPartyDetails: 'test', GRNo: 'test', GRImage: 'test', VehicleNo: 'test', EWayBillNo: 'test', EWayImage: 'test', EWayBillDate: 'test', EWayBilltime: 'test', DriverName: 'test', DriverMobile: 'test', Delivered: 'test', DeliveredDate: 'test', DeliveredTime: 'test', DeliveryReport: 'test', RecivedBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.OrderId).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.ShippedDate).toEqual('test')
  expect(body.ShippedTime).toEqual('test')
  expect(body.ShippingPartyId).toEqual('test')
  expect(body.ShippingPartyDetails).toEqual('test')
  expect(body.GRNo).toEqual('test')
  expect(body.GRImage).toEqual('test')
  expect(body.VehicleNo).toEqual('test')
  expect(body.EWayBillNo).toEqual('test')
  expect(body.EWayImage).toEqual('test')
  expect(body.EWayBillDate).toEqual('test')
  expect(body.EWayBilltime).toEqual('test')
  expect(body.DriverName).toEqual('test')
  expect(body.DriverMobile).toEqual('test')
  expect(body.Delivered).toEqual('test')
  expect(body.DeliveredDate).toEqual('test')
  expect(body.DeliveredTime).toEqual('test')
  expect(body.DeliveryReport).toEqual('test')
  expect(body.RecivedBy).toEqual('test')
})

test('GET /orderShippingDetail 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /orderShippingDetail/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${orderShippingDetail.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderShippingDetail.id)
})

test('GET /orderShippingDetail/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /orderShippingDetail/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${orderShippingDetail.id}`)
    .send({ OrderId: 'test', status: 'test', ShippedDate: 'test', ShippedTime: 'test', ShippingPartyId: 'test', ShippingPartyDetails: 'test', GRNo: 'test', GRImage: 'test', VehicleNo: 'test', EWayBillNo: 'test', EWayImage: 'test', EWayBillDate: 'test', EWayBilltime: 'test', DriverName: 'test', DriverMobile: 'test', Delivered: 'test', DeliveredDate: 'test', DeliveredTime: 'test', DeliveryReport: 'test', RecivedBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orderShippingDetail.id)
  expect(body.OrderId).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.ShippedDate).toEqual('test')
  expect(body.ShippedTime).toEqual('test')
  expect(body.ShippingPartyId).toEqual('test')
  expect(body.ShippingPartyDetails).toEqual('test')
  expect(body.GRNo).toEqual('test')
  expect(body.GRImage).toEqual('test')
  expect(body.VehicleNo).toEqual('test')
  expect(body.EWayBillNo).toEqual('test')
  expect(body.EWayImage).toEqual('test')
  expect(body.EWayBillDate).toEqual('test')
  expect(body.EWayBilltime).toEqual('test')
  expect(body.DriverName).toEqual('test')
  expect(body.DriverMobile).toEqual('test')
  expect(body.Delivered).toEqual('test')
  expect(body.DeliveredDate).toEqual('test')
  expect(body.DeliveredTime).toEqual('test')
  expect(body.DeliveryReport).toEqual('test')
  expect(body.RecivedBy).toEqual('test')
})

test('PUT /orderShippingDetail/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ OrderId: 'test', status: 'test', ShippedDate: 'test', ShippedTime: 'test', ShippingPartyId: 'test', ShippingPartyDetails: 'test', GRNo: 'test', GRImage: 'test', VehicleNo: 'test', EWayBillNo: 'test', EWayImage: 'test', EWayBillDate: 'test', EWayBilltime: 'test', DriverName: 'test', DriverMobile: 'test', Delivered: 'test', DeliveredDate: 'test', DeliveredTime: 'test', DeliveryReport: 'test', RecivedBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /orderShippingDetail/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${orderShippingDetail.id}`)
  expect(status).toBe(204)
})

test('DELETE /orderShippingDetail/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
