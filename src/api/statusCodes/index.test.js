import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { StatusCodes } from '.'

const app = () => express(apiRoot, routes)

let statusCodes

beforeEach(async () => {
  statusCodes = await StatusCodes.create({})
})

test('POST /statusCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /statusCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /statusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${statusCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(statusCodes.id)
})

test('GET /statusCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /statusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${statusCodes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(statusCodes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /statusCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /statusCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${statusCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /statusCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
