import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CategoryEntities } from '.'

const app = () => express(apiRoot, routes)

let categoryEntities

beforeEach(async () => {
  categoryEntities = await CategoryEntities.create({})
})

test('POST /CategoryEntities 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /CategoryEntities 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /CategoryEntities/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${categoryEntities.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(categoryEntities.id)
})

test('GET /CategoryEntities/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /CategoryEntities/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${categoryEntities.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(categoryEntities.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /CategoryEntities/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /CategoryEntities/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${categoryEntities.id}`)
  expect(status).toBe(204)
})

test('DELETE /CategoryEntities/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
