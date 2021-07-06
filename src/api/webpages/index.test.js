import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Webpages } from '.'

const app = () => express(apiRoot, routes)

let webpages

beforeEach(async () => {
  webpages = await Webpages.create({})
})

test('POST /webpages 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /webpages 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /webpages/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${webpages.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(webpages.id)
})

test('GET /webpages/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /webpages/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${webpages.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(webpages.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /webpages/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /webpages/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${webpages.id}`)
  expect(status).toBe(204)
})

test('DELETE /webpages/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
