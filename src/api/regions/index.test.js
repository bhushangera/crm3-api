import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Regions } from '.'

const app = () => express(apiRoot, routes)

let regions

beforeEach(async () => {
  regions = await Regions.create({})
})

test('POST /regions 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ region: 'test', code: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.region).toEqual('test')
  expect(body.code).toEqual('test')
})

test('GET /regions 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /regions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${regions.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(regions.id)
})

test('GET /regions/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /regions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${regions.id}`)
    .send({ region: 'test', code: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(regions.id)
  expect(body.region).toEqual('test')
  expect(body.code).toEqual('test')
})

test('PUT /regions/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ region: 'test', code: 'test' })
  expect(status).toBe(404)
})

test('DELETE /regions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${regions.id}`)
  expect(status).toBe(204)
})

test('DELETE /regions/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})