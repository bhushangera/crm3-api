import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WorkEffortTypes } from '.'

const app = () => express(apiRoot, routes)

let workEffortTypes

beforeEach(async () => {
  workEffortTypes = await WorkEffortTypes.create({})
})

test('POST /workEffortTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ type: 'test', stdWorkHours: 'test', uomId: 'test', uom: 'test', conversionFactor: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.type).toEqual('test')
  expect(body.stdWorkHours).toEqual('test')
  expect(body.uomId).toEqual('test')
  expect(body.uom).toEqual('test')
  expect(body.conversionFactor).toEqual('test')
})

test('GET /workEffortTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /workEffortTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${workEffortTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workEffortTypes.id)
})

test('GET /workEffortTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /workEffortTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${workEffortTypes.id}`)
    .send({ type: 'test', stdWorkHours: 'test', uomId: 'test', uom: 'test', conversionFactor: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workEffortTypes.id)
  expect(body.type).toEqual('test')
  expect(body.stdWorkHours).toEqual('test')
  expect(body.uomId).toEqual('test')
  expect(body.uom).toEqual('test')
  expect(body.conversionFactor).toEqual('test')
})

test('PUT /workEffortTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ type: 'test', stdWorkHours: 'test', uomId: 'test', uom: 'test', conversionFactor: 'test' })
  expect(status).toBe(404)
})

test('DELETE /workEffortTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${workEffortTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /workEffortTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
