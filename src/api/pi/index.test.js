import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Pi } from '.'

const app = () => express(apiRoot, routes)

let pi

beforeEach(async () => {
  pi = await Pi.create({})
})

test('POST /pi 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ enqId: 'test', piDate: 'test', ccAmt: 'test', ccGST: 'test', ccTotal: 'test', sAmt: 'test', sGST: 'test', sTotal: 'test', aAmt: 'test', aGST: 'test', aTotal: 'test', tAmt: 'test', tGST: 'test', tTotal: 'test', extDrw: 'test', intDrw: 'test', looseShelf: 'test', vPartitions: 'test', edgeFinish: 'test', createdBy: 'test', intCheckedBy: 'test', intCheckedDate: 'test', approvedBy: 'test', approvedDate: 'test', ordered: 'test', orderDate: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.enqId).toEqual('test')
  expect(body.piDate).toEqual('test')
  expect(body.ccAmt).toEqual('test')
  expect(body.ccGST).toEqual('test')
  expect(body.ccTotal).toEqual('test')
  expect(body.sAmt).toEqual('test')
  expect(body.sGST).toEqual('test')
  expect(body.sTotal).toEqual('test')
  expect(body.aAmt).toEqual('test')
  expect(body.aGST).toEqual('test')
  expect(body.aTotal).toEqual('test')
  expect(body.tAmt).toEqual('test')
  expect(body.tGST).toEqual('test')
  expect(body.tTotal).toEqual('test')
  expect(body.extDrw).toEqual('test')
  expect(body.intDrw).toEqual('test')
  expect(body.looseShelf).toEqual('test')
  expect(body.vPartitions).toEqual('test')
  expect(body.edgeFinish).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.intCheckedBy).toEqual('test')
  expect(body.intCheckedDate).toEqual('test')
  expect(body.approvedBy).toEqual('test')
  expect(body.approvedDate).toEqual('test')
  expect(body.ordered).toEqual('test')
  expect(body.orderDate).toEqual('test')
})

test('GET /pi 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /pi/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${pi.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pi.id)
})

test('GET /pi/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /pi/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${pi.id}`)
    .send({ enqId: 'test', piDate: 'test', ccAmt: 'test', ccGST: 'test', ccTotal: 'test', sAmt: 'test', sGST: 'test', sTotal: 'test', aAmt: 'test', aGST: 'test', aTotal: 'test', tAmt: 'test', tGST: 'test', tTotal: 'test', extDrw: 'test', intDrw: 'test', looseShelf: 'test', vPartitions: 'test', edgeFinish: 'test', createdBy: 'test', intCheckedBy: 'test', intCheckedDate: 'test', approvedBy: 'test', approvedDate: 'test', ordered: 'test', orderDate: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pi.id)
  expect(body.enqId).toEqual('test')
  expect(body.piDate).toEqual('test')
  expect(body.ccAmt).toEqual('test')
  expect(body.ccGST).toEqual('test')
  expect(body.ccTotal).toEqual('test')
  expect(body.sAmt).toEqual('test')
  expect(body.sGST).toEqual('test')
  expect(body.sTotal).toEqual('test')
  expect(body.aAmt).toEqual('test')
  expect(body.aGST).toEqual('test')
  expect(body.aTotal).toEqual('test')
  expect(body.tAmt).toEqual('test')
  expect(body.tGST).toEqual('test')
  expect(body.tTotal).toEqual('test')
  expect(body.extDrw).toEqual('test')
  expect(body.intDrw).toEqual('test')
  expect(body.looseShelf).toEqual('test')
  expect(body.vPartitions).toEqual('test')
  expect(body.edgeFinish).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.intCheckedBy).toEqual('test')
  expect(body.intCheckedDate).toEqual('test')
  expect(body.approvedBy).toEqual('test')
  expect(body.approvedDate).toEqual('test')
  expect(body.ordered).toEqual('test')
  expect(body.orderDate).toEqual('test')
})

test('PUT /pi/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ enqId: 'test', piDate: 'test', ccAmt: 'test', ccGST: 'test', ccTotal: 'test', sAmt: 'test', sGST: 'test', sTotal: 'test', aAmt: 'test', aGST: 'test', aTotal: 'test', tAmt: 'test', tGST: 'test', tTotal: 'test', extDrw: 'test', intDrw: 'test', looseShelf: 'test', vPartitions: 'test', edgeFinish: 'test', createdBy: 'test', intCheckedBy: 'test', intCheckedDate: 'test', approvedBy: 'test', approvedDate: 'test', ordered: 'test', orderDate: 'test' })
  expect(status).toBe(404)
})

test('DELETE /pi/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${pi.id}`)
  expect(status).toBe(204)
})

test('DELETE /pi/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
