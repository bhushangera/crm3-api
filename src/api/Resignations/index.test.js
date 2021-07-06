import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Resignations } from '.'

const app = () => express(apiRoot, routes)

let resignations

beforeEach(async () => {
  resignations = await Resignations.create({})
})

test('POST /Resignations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Resignations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Resignations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${resignations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(resignations.id)
})

test('GET /Resignations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Resignations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${resignations.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(resignations.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Resignations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Resignations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${resignations.id}`)
  expect(status).toBe(204)
})

test('DELETE /Resignations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
