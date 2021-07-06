import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Accounttype } from '.'

const app = () => express(apiRoot, routes)

let accounttype

beforeEach(async () => {
  accounttype = await Accounttype.create({})
})

test('POST /accounttype 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /accounttype 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /accounttype/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${accounttype.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(accounttype.id)
})

test('GET /accounttype/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /accounttype/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${accounttype.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(accounttype.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /accounttype/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /accounttype/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${accounttype.id}`)
  expect(status).toBe(204)
})

test('DELETE /accounttype/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
