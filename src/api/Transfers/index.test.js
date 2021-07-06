import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Transfers } from '.'

const app = () => express(apiRoot, routes)

let transfers

beforeEach(async () => {
  transfers = await Transfers.create({})
})

test('POST /Transfers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Transfers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Transfers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${transfers.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(transfers.id)
})

test('GET /Transfers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Transfers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${transfers.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(transfers.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Transfers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Transfers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${transfers.id}`)
  expect(status).toBe(204)
})

test('DELETE /Transfers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
