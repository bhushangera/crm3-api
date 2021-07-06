import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { StatusEntities } from '.'

const app = () => express(apiRoot, routes)

let statusEntities

beforeEach(async () => {
  statusEntities = await StatusEntities.create({})
})

test('POST /statusEntities 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /statusEntities 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /statusEntities/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${statusEntities.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(statusEntities.id)
})

test('GET /statusEntities/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /statusEntities/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${statusEntities.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(statusEntities.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /statusEntities/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /statusEntities/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${statusEntities.id}`)
  expect(status).toBe(204)
})

test('DELETE /statusEntities/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
