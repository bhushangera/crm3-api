import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Warehouse } from '.'

const app = () => express(apiRoot, routes)

let warehouse

beforeEach(async () => {
  warehouse = await Warehouse.create({})
})

test('POST /Warehouse 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Warehouse 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Warehouse/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${warehouse.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(warehouse.id)
})

test('GET /Warehouse/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Warehouse/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${warehouse.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(warehouse.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Warehouse/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Warehouse/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${warehouse.id}`)
  expect(status).toBe(204)
})

test('DELETE /Warehouse/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
