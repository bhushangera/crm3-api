import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WorkEffortsScroll } from '.'

const app = () => express(apiRoot, routes)

let workEffortsScroll

beforeEach(async () => {
  workEffortsScroll = await WorkEffortsScroll.create({})
})

test('POST /workEffortsScroll 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ assignedToParty: 'test', partyDetails: 'test', comments: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', closed: 'test', Remarks: string;: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.assignedToParty).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.comments).toEqual('test')
  expect(body.fromDate).toEqual('test')
  expect(body.fromTime).toEqual('test')
  expect(body.toDate).toEqual('test')
  expect(body.toTime).toEqual('test')
  expect(body.closed).toEqual('test')
  expect(body.Remarks: string;).toEqual('test')
})

test('GET /workEffortsScroll 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /workEffortsScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${workEffortsScroll.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workEffortsScroll.id)
})

test('GET /workEffortsScroll/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /workEffortsScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${workEffortsScroll.id}`)
    .send({ assignedToParty: 'test', partyDetails: 'test', comments: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', closed: 'test', Remarks: string;: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workEffortsScroll.id)
  expect(body.assignedToParty).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.comments).toEqual('test')
  expect(body.fromDate).toEqual('test')
  expect(body.fromTime).toEqual('test')
  expect(body.toDate).toEqual('test')
  expect(body.toTime).toEqual('test')
  expect(body.closed).toEqual('test')
  expect(body.Remarks: string;).toEqual('test')
})

test('PUT /workEffortsScroll/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ assignedToParty: 'test', partyDetails: 'test', comments: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', closed: 'test', Remarks: string;: 'test' })
  expect(status).toBe(404)
})

test('DELETE /workEffortsScroll/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${workEffortsScroll.id}`)
  expect(status).toBe(204)
})

test('DELETE /workEffortsScroll/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
