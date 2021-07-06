import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Visitors } from '.'

const app = () => express(apiRoot, routes)

let visitors

beforeEach(async () => {
  visitors = await Visitors.create({})
})

test('POST /Visitors 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Visitors 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Visitors/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${visitors.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(visitors.id)
})

test('GET /Visitors/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Visitors/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${visitors.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(visitors.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Visitors/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Visitors/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${visitors.id}`)
  expect(status).toBe(204)
})

test('DELETE /Visitors/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
