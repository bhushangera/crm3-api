import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { AssetCategories } from '.'

const app = () => express(apiRoot, routes)

let assetCategories

beforeEach(async () => {
  assetCategories = await AssetCategories.create({})
})

test('POST /AssetCategories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /AssetCategories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /AssetCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${assetCategories.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assetCategories.id)
})

test('GET /AssetCategories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /AssetCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${assetCategories.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(assetCategories.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /AssetCategories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /AssetCategories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${assetCategories.id}`)
  expect(status).toBe(204)
})

test('DELETE /AssetCategories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
