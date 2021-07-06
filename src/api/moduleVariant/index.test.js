import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ModuleVariant } from '.'

const app = () => express(apiRoot, routes)

let moduleVariant

beforeEach(async () => {
  moduleVariant = await ModuleVariant.create({})
})

test('POST /moduleVariant 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /moduleVariant 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /moduleVariant/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${moduleVariant.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(moduleVariant.id)
})

test('GET /moduleVariant/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /moduleVariant/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${moduleVariant.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(moduleVariant.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /moduleVariant/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /moduleVariant/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${moduleVariant.id}`)
  expect(status).toBe(204)
})

test('DELETE /moduleVariant/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
