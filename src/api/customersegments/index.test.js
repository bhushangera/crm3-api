import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Customersegments } from '.'

const app = () => express(apiRoot, routes)

let customersegments

beforeEach(async () => {
  customersegments = await Customersegments.create({})
})

test('POST /customersegments 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /customersegments 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /customersegments/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${customersegments.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(customersegments.id)
})

test('GET /customersegments/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /customersegments/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${customersegments.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(customersegments.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /customersegments/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /customersegments/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${customersegments.id}`)
  expect(status).toBe(204)
})

test('DELETE /customersegments/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
