import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Assets } from '.'

const app = () => express(apiRoot, routes)

let assets

beforeEach(async () => {
  assets = await Assets.create({})
})

test('POST /Assets 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Assets 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Assets/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${assets.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assets.id)
})

test('GET /Assets/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Assets/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${assets.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assets.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Assets/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Assets/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${assets.id}`)
  expect(status).toBe(204)
})

test('DELETE /Assets/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
