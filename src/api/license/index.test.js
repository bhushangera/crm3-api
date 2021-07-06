import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { License } from '.'

const app = () => express(apiRoot, routes)

let license

beforeEach(async () => {
  license = await License.create({})
})

test('POST /license 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /license 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /license/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${license.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(license.id)
})

test('GET /license/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /license/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${license.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(license.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /license/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /license/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${license.id}`)
  expect(status).toBe(204)
})

test('DELETE /license/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
