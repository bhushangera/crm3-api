import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Salutations } from '.'

const app = () => express(apiRoot, routes)

let salutations

beforeEach(async () => {
  salutations = await Salutations.create({})
})

test('POST /salutations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /salutations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /salutations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${salutations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salutations.id)
})

test('GET /salutations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /salutations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${salutations.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salutations.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /salutations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /salutations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${salutations.id}`)
  expect(status).toBe(204)
})

test('DELETE /salutations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
