import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { AssetLocations } from '.'

const app = () => express(apiRoot, routes)

let assetLocations

beforeEach(async () => {
  assetLocations = await AssetLocations.create({})
})

test('POST /AssetLocations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /AssetLocations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /AssetLocations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${assetLocations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assetLocations.id)
})

test('GET /AssetLocations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /AssetLocations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${assetLocations.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assetLocations.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /AssetLocations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /AssetLocations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${assetLocations.id}`)
  expect(status).toBe(204)
})

test('DELETE /AssetLocations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
