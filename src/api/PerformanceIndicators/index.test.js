import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PerformanceIndicators } from '.'

const app = () => express(apiRoot, routes)

let performanceIndicators

beforeEach(async () => {
  performanceIndicators = await PerformanceIndicators.create({})
})

test('POST /PerformanceIndicators 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /PerformanceIndicators 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /PerformanceIndicators/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${performanceIndicators.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(performanceIndicators.id)
})

test('GET /PerformanceIndicators/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /PerformanceIndicators/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${performanceIndicators.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(performanceIndicators.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /PerformanceIndicators/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /PerformanceIndicators/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${performanceIndicators.id}`)
  expect(status).toBe(204)
})

test('DELETE /PerformanceIndicators/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
