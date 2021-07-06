import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { FeatureModules } from '.'

const app = () => express(apiRoot, routes)

let featureModules

beforeEach(async () => {
  featureModules = await FeatureModules.create({})
})

test('POST /featureModules 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /featureModules 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /featureModules/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${featureModules.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(featureModules.id)
})

test('GET /featureModules/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /featureModules/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${featureModules.id}`)
    .send({ code: 'test', description: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(featureModules.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /featureModules/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /featureModules/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${featureModules.id}`)
  expect(status).toBe(204)
})

test('DELETE /featureModules/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
