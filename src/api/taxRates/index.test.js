import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TaxRates } from '.'

const app = () => express(apiRoot, routes)

let taxRates

beforeEach(async () => {
  taxRates = await TaxRates.create({})
})

test('POST /taxRates 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', descrption: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.descrption).toEqual('test')
})

test('GET /taxRates 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /taxRates/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${taxRates.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(taxRates.id)
})

test('GET /taxRates/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /taxRates/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${taxRates.id}`)
    .send({ code: 'test', descrption: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(taxRates.id)
  expect(body.code).toEqual('test')
  expect(body.descrption).toEqual('test')
})

test('PUT /taxRates/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', descrption: 'test' })
  expect(status).toBe(404)
})

test('DELETE /taxRates/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${taxRates.id}`)
  expect(status).toBe(204)
})

test('DELETE /taxRates/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
