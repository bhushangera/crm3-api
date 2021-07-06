import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Promotions } from '.'

const app = () => express(apiRoot, routes)

let promotions

beforeEach(async () => {
  promotions = await Promotions.create({})
})

test('POST /Promotions 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Promotions 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Promotions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${promotions.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(promotions.id)
})

test('GET /Promotions/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Promotions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${promotions.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(promotions.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Promotions/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Promotions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${promotions.id}`)
  expect(status).toBe(204)
})

test('DELETE /Promotions/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
