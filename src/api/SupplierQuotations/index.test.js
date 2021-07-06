import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SupplierQuotations } from '.'

const app = () => express(apiRoot, routes)

let supplierQuotations

beforeEach(async () => {
  supplierQuotations = await SupplierQuotations.create({})
})

test('POST /SupplierQuotations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /SupplierQuotations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /SupplierQuotations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${supplierQuotations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(supplierQuotations.id)
})

test('GET /SupplierQuotations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /SupplierQuotations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${supplierQuotations.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(supplierQuotations.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /SupplierQuotations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /SupplierQuotations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${supplierQuotations.id}`)
  expect(status).toBe(204)
})

test('DELETE /SupplierQuotations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
