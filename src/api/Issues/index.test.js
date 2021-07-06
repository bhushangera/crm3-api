import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Issues } from '.'

const app = () => express(apiRoot, routes)

let issues

beforeEach(async () => {
  issues = await Issues.create({})
})

test('POST /Issues 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Issues 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Issues/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${issues.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(issues.id)
})

test('GET /Issues/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Issues/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${issues.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(issues.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Issues/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Issues/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${issues.id}`)
  expect(status).toBe(204)
})

test('DELETE /Issues/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
