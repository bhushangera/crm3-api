import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Campaigns } from '.'

const app = () => express(apiRoot, routes)

let campaigns

beforeEach(async () => {
  campaigns = await Campaigns.create({})
})

test('POST /campaigns 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /campaigns 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /campaigns/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${campaigns.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaigns.id)
})

test('GET /campaigns/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /campaigns/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${campaigns.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaigns.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /campaigns/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /campaigns/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${campaigns.id}`)
  expect(status).toBe(204)
})

test('DELETE /campaigns/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
