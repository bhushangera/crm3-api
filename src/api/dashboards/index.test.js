import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Dashboards } from '.'

const app = () => express(apiRoot, routes)

let dashboards

beforeEach(async () => {
  dashboards = await Dashboards.create({})
})

test('POST /dashboards 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test', path: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.path).toEqual('test')
})

test('GET /dashboards 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /dashboards/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${dashboards.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dashboards.id)
})

test('GET /dashboards/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /dashboards/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${dashboards.id}`)
    .send({ code: 'test', description: 'test', path: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dashboards.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.path).toEqual('test')
})

test('PUT /dashboards/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test', path: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dashboards/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dashboards.id}`)
  expect(status).toBe(204)
})

test('DELETE /dashboards/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
