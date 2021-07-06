import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { DlrProducts } from '.'

const app = () => express(apiRoot, routes)

let dlrProducts

beforeEach(async () => {
  dlrProducts = await DlrProducts.create({})
})

test('POST /dlrProducts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ dpCategoryId: 'test', product: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.dpCategoryId).toEqual('test')
  expect(body.product).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /dlrProducts 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /dlrProducts/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${dlrProducts.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dlrProducts.id)
})

test('GET /dlrProducts/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /dlrProducts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${dlrProducts.id}`)
    .send({ dpCategoryId: 'test', product: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dlrProducts.id)
  expect(body.dpCategoryId).toEqual('test')
  expect(body.product).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /dlrProducts/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ dpCategoryId: 'test', product: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dlrProducts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dlrProducts.id}`)
  expect(status).toBe(204)
})

test('DELETE /dlrProducts/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
