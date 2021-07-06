import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { GatePass } from '.'

const app = () => express(apiRoot, routes)

let gatePass

beforeEach(async () => {
  gatePass = await GatePass.create({})
})

test('POST /GatePass 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /GatePass 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /GatePass/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${gatePass.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gatePass.id)
})

test('GET /GatePass/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /GatePass/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${gatePass.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gatePass.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /GatePass/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /GatePass/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${gatePass.id}`)
  expect(status).toBe(204)
})

test('DELETE /GatePass/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
