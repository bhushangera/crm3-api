import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CategoryReasons } from '.'

const app = () => express(apiRoot, routes)

let categoryReasons

beforeEach(async () => {
  categoryReasons = await CategoryReasons.create({})
})

test('POST /categoryReasons 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /categoryReasons 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /categoryReasons/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${categoryReasons.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(categoryReasons.id)
})

test('GET /categoryReasons/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /categoryReasons/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${categoryReasons.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(categoryReasons.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /categoryReasons/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /categoryReasons/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${categoryReasons.id}`)
  expect(status).toBe(204)
})

test('DELETE /categoryReasons/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
