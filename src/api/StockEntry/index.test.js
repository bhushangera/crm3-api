import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { StockEntry } from '.'

const app = () => express(apiRoot, routes)

let stockEntry

beforeEach(async () => {
  stockEntry = await StockEntry.create({})
})

test('POST /StockEntry 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /StockEntry 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /StockEntry/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${stockEntry.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(stockEntry.id)
})

test('GET /StockEntry/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /StockEntry/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${stockEntry.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(stockEntry.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /StockEntry/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /StockEntry/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${stockEntry.id}`)
  expect(status).toBe(204)
})

test('DELETE /StockEntry/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
