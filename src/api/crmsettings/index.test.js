import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Crmsettings } from '.'

const app = () => express(apiRoot, routes)

let crmsettings

beforeEach(async () => {
  crmsettings = await Crmsettings.create({})
})

test('POST /crmsettings 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /crmsettings 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /crmsettings/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${crmsettings.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(crmsettings.id)
})

test('GET /crmsettings/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /crmsettings/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${crmsettings.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(crmsettings.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /crmsettings/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /crmsettings/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${crmsettings.id}`)
  expect(status).toBe(204)
})

test('DELETE /crmsettings/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
