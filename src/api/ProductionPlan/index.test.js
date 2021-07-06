import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ProductionPlan } from '.'

const app = () => express(apiRoot, routes)

let productionPlan

beforeEach(async () => {
  productionPlan = await ProductionPlan.create({})
})

test('POST /ProductionPlan 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /ProductionPlan 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ProductionPlan/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${productionPlan.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productionPlan.id)
})

test('GET /ProductionPlan/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ProductionPlan/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${productionPlan.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productionPlan.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /ProductionPlan/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ProductionPlan/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${productionPlan.id}`)
  expect(status).toBe(204)
})

test('DELETE /ProductionPlan/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
