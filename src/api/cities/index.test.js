import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Cities } from '.'

const app = () => express(apiRoot, routes)

let cities

beforeEach(async () => {
  cities = await Cities.create({})
})

test('POST /cities 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
})

test('GET /cities 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /cities/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${cities.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cities.id)
})

test('GET /cities/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /cities/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${cities.id}`)
    .send({ name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cities.id)
  expect(body.name).toEqual('test')
})

test('PUT /cities/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /cities/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${cities.id}`)
  expect(status).toBe(204)
})

test('DELETE /cities/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
