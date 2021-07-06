import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Currency } from '.'

const app = () => express(apiRoot, routes)

let currency

beforeEach(async () => {
  currency = await Currency.create({})
})

test('POST /currency 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /currency 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /currency/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${currency.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(currency.id)
})

test('GET /currency/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /currency/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${currency.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(currency.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /currency/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /currency/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${currency.id}`)
  expect(status).toBe(204)
})

test('DELETE /currency/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
