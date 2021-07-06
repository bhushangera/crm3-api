import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { LeavePolicies } from '.'

const app = () => express(apiRoot, routes)

let leavePolicies

beforeEach(async () => {
  leavePolicies = await LeavePolicies.create({})
})

test('POST /LeavePolicies 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /LeavePolicies 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /LeavePolicies/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${leavePolicies.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leavePolicies.id)
})

test('GET /LeavePolicies/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /LeavePolicies/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${leavePolicies.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leavePolicies.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /LeavePolicies/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /LeavePolicies/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${leavePolicies.id}`)
  expect(status).toBe(204)
})

test('DELETE /LeavePolicies/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
