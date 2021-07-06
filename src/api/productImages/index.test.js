import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ProductImages } from '.'

const app = () => express(apiRoot, routes)

let productImages

beforeEach(async () => {
  productImages = await ProductImages.create({})
})

test('POST /productImages 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ productId: 'test', image: 'test', isPrimary: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.productId).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isPrimary).toEqual('test')
})

test('GET /productImages 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /productImages/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${productImages.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productImages.id)
})

test('GET /productImages/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /productImages/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${productImages.id}`)
    .send({ productId: 'test', image: 'test', isPrimary: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productImages.id)
  expect(body.productId).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isPrimary).toEqual('test')
})

test('PUT /productImages/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ productId: 'test', image: 'test', isPrimary: 'test' })
  expect(status).toBe(404)
})

test('DELETE /productImages/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${productImages.id}`)
  expect(status).toBe(204)
})

test('DELETE /productImages/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
