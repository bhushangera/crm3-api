import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CategoryCodes } from '.'

const app = () => express(apiRoot, routes)

let categoryCodes

beforeEach(async () => {
  categoryCodes = await CategoryCodes.create({})
})

test('POST /CategoryCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /CategoryCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /CategoryCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${categoryCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(categoryCodes.id)
})

test('GET /CategoryCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /CategoryCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${categoryCodes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(categoryCodes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /CategoryCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /CategoryCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${categoryCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /CategoryCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
