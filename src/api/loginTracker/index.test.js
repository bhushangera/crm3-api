import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { LoginTracker } from '.'

const app = () => express(apiRoot, routes)

let loginTracker

beforeEach(async () => {
  loginTracker = await LoginTracker.create({})
})

test('POST /loginTracker 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
})

test('GET /loginTracker 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /loginTracker/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${loginTracker.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(loginTracker.id)
})

test('GET /loginTracker/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /loginTracker/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${loginTracker.id}`)
    .send({ code: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(loginTracker.id)
  expect(body.code).toEqual('test')
})

test('PUT /loginTracker/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test' })
  expect(status).toBe(404)
})

test('DELETE /loginTracker/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${loginTracker.id}`)
  expect(status).toBe(204)
})

test('DELETE /loginTracker/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
