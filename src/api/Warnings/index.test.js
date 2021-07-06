import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Warnings } from '.'

const app = () => express(apiRoot, routes)

let warnings

beforeEach(async () => {
  warnings = await Warnings.create({})
})

test('POST /Warnings 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Warnings 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Warnings/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${warnings.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(warnings.id)
})

test('GET /Warnings/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Warnings/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${warnings.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(warnings.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Warnings/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Warnings/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${warnings.id}`)
  expect(status).toBe(204)
})

test('DELETE /Warnings/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
