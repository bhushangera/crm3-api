import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PostalTypes } from '.'

const app = () => express(apiRoot, routes)

let postalTypes

beforeEach(async () => {
  postalTypes = await PostalTypes.create({})
})

test('POST /PostalTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /PostalTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /PostalTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${postalTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(postalTypes.id)
})

test('GET /PostalTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /PostalTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${postalTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(postalTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /PostalTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /PostalTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${postalTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /PostalTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
