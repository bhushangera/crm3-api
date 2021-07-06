import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { EntityCategory } from '.'

const app = () => express(apiRoot, routes)

let entityCategory

beforeEach(async () => {
  entityCategory = await EntityCategory.create({})
})

test('POST /entityCategory 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /entityCategory 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /entityCategory/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${entityCategory.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(entityCategory.id)
})

test('GET /entityCategory/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /entityCategory/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${entityCategory.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(entityCategory.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /entityCategory/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /entityCategory/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${entityCategory.id}`)
  expect(status).toBe(204)
})

test('DELETE /entityCategory/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
