import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Plans } from '.'

const app = () => express(apiRoot, routes)

let plans

beforeEach(async () => {
  plans = await Plans.create({})
})

test('POST /plans 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /plans 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /plans/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${plans.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(plans.id)
})

test('GET /plans/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /plans/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${plans.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(plans.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /plans/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /plans/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${plans.id}`)
  expect(status).toBe(204)
})

test('DELETE /plans/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
