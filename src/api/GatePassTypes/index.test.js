import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { GatePassTypes } from '.'

const app = () => express(apiRoot, routes)

let gatePassTypes

beforeEach(async () => {
  gatePassTypes = await GatePassTypes.create({})
})

test('POST /GatePassTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /GatePassTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /GatePassTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${gatePassTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gatePassTypes.id)
})

test('GET /GatePassTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /GatePassTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${gatePassTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gatePassTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /GatePassTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /GatePassTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${gatePassTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /GatePassTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
