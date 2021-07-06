import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CloudPlans } from '.'

const app = () => express(apiRoot, routes)

let cloudPlans

beforeEach(async () => {
  cloudPlans = await CloudPlans.create({})
})

test('POST /cloudPlans 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /cloudPlans 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /cloudPlans/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${cloudPlans.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cloudPlans.id)
})

test('GET /cloudPlans/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /cloudPlans/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${cloudPlans.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cloudPlans.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /cloudPlans/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /cloudPlans/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${cloudPlans.id}`)
  expect(status).toBe(204)
})

test('DELETE /cloudPlans/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
