import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PriceBook } from '.'

const app = () => express(apiRoot, routes)

let priceBook

beforeEach(async () => {
  priceBook = await PriceBook.create({})
})

test('POST /priceBook 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /priceBook 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /priceBook/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${priceBook.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(priceBook.id)
})

test('GET /priceBook/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /priceBook/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${priceBook.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(priceBook.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /priceBook/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /priceBook/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${priceBook.id}`)
  expect(status).toBe(204)
})

test('DELETE /priceBook/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
