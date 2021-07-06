import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { FixedAssetTypes } from '.'

const app = () => express(apiRoot, routes)

let fixedAssetTypes

beforeEach(async () => {
  fixedAssetTypes = await FixedAssetTypes.create({})
})

test('POST /fixedAssetTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ type: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.type).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /fixedAssetTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /fixedAssetTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${fixedAssetTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssetTypes.id)
})

test('GET /fixedAssetTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /fixedAssetTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${fixedAssetTypes.id}`)
    .send({ type: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssetTypes.id)
  expect(body.type).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /fixedAssetTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ type: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /fixedAssetTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${fixedAssetTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /fixedAssetTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
