import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { AssetStatusCodes } from '.'

const app = () => express(apiRoot, routes)

let assetStatusCodes

beforeEach(async () => {
  assetStatusCodes = await AssetStatusCodes.create({})
})

test('POST /AssetStatusCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /AssetStatusCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /AssetStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${assetStatusCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assetStatusCodes.id)
})

test('GET /AssetStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /AssetStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${assetStatusCodes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assetStatusCodes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /AssetStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /AssetStatusCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${assetStatusCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /AssetStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
