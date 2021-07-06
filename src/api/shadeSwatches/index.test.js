import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ShadeSwatches } from '.'

const app = () => express(apiRoot, routes)

let shadeSwatches

beforeEach(async () => {
  shadeSwatches = await ShadeSwatches.create({})
})

test('POST /shadeSwatches 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /shadeSwatches 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /shadeSwatches/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${shadeSwatches.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shadeSwatches.id)
})

test('GET /shadeSwatches/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /shadeSwatches/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${shadeSwatches.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shadeSwatches.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /shadeSwatches/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /shadeSwatches/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${shadeSwatches.id}`)
  expect(status).toBe(204)
})

test('DELETE /shadeSwatches/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
