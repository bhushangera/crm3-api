import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WorkOrders } from '.'

const app = () => express(apiRoot, routes)

let workOrders

beforeEach(async () => {
  workOrders = await WorkOrders.create({})
})

test('POST /WorkOrders 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /WorkOrders 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /WorkOrders/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${workOrders.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workOrders.id)
})

test('GET /WorkOrders/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /WorkOrders/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${workOrders.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workOrders.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /WorkOrders/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /WorkOrders/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${workOrders.id}`)
  expect(status).toBe(204)
})

test('DELETE /WorkOrders/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
