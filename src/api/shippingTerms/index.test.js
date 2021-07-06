import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ShippingTerms } from '.'

const app = () => express(apiRoot, routes)

let shippingTerms

beforeEach(async () => {
  shippingTerms = await ShippingTerms.create({})
})

test('POST /shippingTerms 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /shippingTerms 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /shippingTerms/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${shippingTerms.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shippingTerms.id)
})

test('GET /shippingTerms/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /shippingTerms/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${shippingTerms.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shippingTerms.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /shippingTerms/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /shippingTerms/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${shippingTerms.id}`)
  expect(status).toBe(204)
})

test('DELETE /shippingTerms/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
