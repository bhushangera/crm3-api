import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Deals } from '.'

const app = () => express(apiRoot, routes)

let deals

beforeEach(async () => {
  deals = await Deals.create({})
})

test('POST /deals 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /deals 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /deals/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${deals.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(deals.id)
})

test('GET /deals/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /deals/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${deals.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(deals.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /deals/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /deals/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${deals.id}`)
  expect(status).toBe(204)
})

test('DELETE /deals/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
