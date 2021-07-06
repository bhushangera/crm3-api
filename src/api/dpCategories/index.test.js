import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { DpCategories } from '.'

const app = () => express(apiRoot, routes)

let dpCategories

beforeEach(async () => {
  dpCategories = await DpCategories.create({})
})

test('POST /dpCategories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ category: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.category).toEqual('test')
})

test('GET /dpCategories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /dpCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${dpCategories.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dpCategories.id)
})

test('GET /dpCategories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /dpCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${dpCategories.id}`)
    .send({ category: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dpCategories.id)
  expect(body.category).toEqual('test')
})

test('PUT /dpCategories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ category: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dpCategories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dpCategories.id}`)
  expect(status).toBe(204)
})

test('DELETE /dpCategories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
