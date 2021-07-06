import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Subscription } from '.'

const app = () => express(apiRoot, routes)

let subscription

beforeEach(async () => {
  subscription = await Subscription.create({})
})

test('POST /Subscription 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Subscription 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Subscription/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${subscription.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(subscription.id)
})

test('GET /Subscription/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Subscription/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${subscription.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(subscription.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Subscription/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Subscription/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${subscription.id}`)
  expect(status).toBe(204)
})

test('DELETE /Subscription/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
