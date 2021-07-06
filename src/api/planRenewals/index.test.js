import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PlanRenewals } from '.'

const app = () => express(apiRoot, routes)

let planRenewals

beforeEach(async () => {
  planRenewals = await PlanRenewals.create({})
})

test('POST /planRenewals 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /planRenewals 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /planRenewals/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${planRenewals.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(planRenewals.id)
})

test('GET /planRenewals/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /planRenewals/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${planRenewals.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(planRenewals.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /planRenewals/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /planRenewals/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${planRenewals.id}`)
  expect(status).toBe(204)
})

test('DELETE /planRenewals/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
