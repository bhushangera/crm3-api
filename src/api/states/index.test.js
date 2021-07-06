import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { States } from '.'

const app = () => express(apiRoot, routes)

let states

beforeEach(async () => {
  states = await States.create({})
})

test('POST /states 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ countryId: 'test', country: 'test', code: 'test', name: 'test', slug: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.countryId).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('GET /states 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /states/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${states.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(states.id)
})

test('GET /states/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /states/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${states.id}`)
    .send({ countryId: 'test', country: 'test', code: 'test', name: 'test', slug: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(states.id)
  expect(body.countryId).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('PUT /states/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ countryId: 'test', country: 'test', code: 'test', name: 'test', slug: 'test' })
  expect(status).toBe(404)
})

test('DELETE /states/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${states.id}`)
  expect(status).toBe(204)
})

test('DELETE /states/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
