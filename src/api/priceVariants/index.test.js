import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PriceVariants } from '.'

const app = () => express(apiRoot, routes)

let priceVariants

beforeEach(async () => {
  priceVariants = await PriceVariants.create({})
})

test('POST /priceVariants 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /priceVariants 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /priceVariants/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${priceVariants.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(priceVariants.id)
})

test('GET /priceVariants/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /priceVariants/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${priceVariants.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(priceVariants.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /priceVariants/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /priceVariants/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${priceVariants.id}`)
  expect(status).toBe(204)
})

test('DELETE /priceVariants/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
