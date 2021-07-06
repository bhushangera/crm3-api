import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Uom } from '.'

const app = () => express(apiRoot, routes)

let uom

beforeEach(async () => {
  uom = await Uom.create({})
})

test('POST /uom 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ units: 'test', : 'test', unitGroup: 'test', description: 'test', conversionFactor: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.units).toEqual('test')
  expect(body.).toEqual('test')
  expect(body.unitGroup).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.conversionFactor).toEqual('test')
})

test('GET /uom 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /uom/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${uom.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(uom.id)
})

test('GET /uom/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /uom/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${uom.id}`)
    .send({ units: 'test', : 'test', unitGroup: 'test', description: 'test', conversionFactor: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(uom.id)
  expect(body.units).toEqual('test')
  expect(body.).toEqual('test')
  expect(body.unitGroup).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.conversionFactor).toEqual('test')
})

test('PUT /uom/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ units: 'test', : 'test', unitGroup: 'test', description: 'test', conversionFactor: 'test' })
  expect(status).toBe(404)
})

test('DELETE /uom/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${uom.id}`)
  expect(status).toBe(204)
})

test('DELETE /uom/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
