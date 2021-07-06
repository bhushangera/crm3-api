import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Teritories } from '.'

const app = () => express(apiRoot, routes)

let teritories

beforeEach(async () => {
  teritories = await Teritories.create({})
})

test('POST /teritories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ locCode: 'test', city: 'test', state: 'test', country: 'test', pinCode: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.locCode).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.pinCode).toEqual('test')
})

test('GET /teritories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /teritories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${teritories.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(teritories.id)
})

test('GET /teritories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /teritories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${teritories.id}`)
    .send({ locCode: 'test', city: 'test', state: 'test', country: 'test', pinCode: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(teritories.id)
  expect(body.locCode).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.pinCode).toEqual('test')
})

test('PUT /teritories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ locCode: 'test', city: 'test', state: 'test', country: 'test', pinCode: 'test' })
  expect(status).toBe(404)
})

test('DELETE /teritories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${teritories.id}`)
  expect(status).toBe(204)
})

test('DELETE /teritories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
