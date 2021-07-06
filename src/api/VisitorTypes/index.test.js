import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { VisitorTypes } from '.'

const app = () => express(apiRoot, routes)

let visitorTypes

beforeEach(async () => {
  visitorTypes = await VisitorTypes.create({})
})

test('POST /VisitorTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /VisitorTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /VisitorTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${visitorTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(visitorTypes.id)
})

test('GET /VisitorTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /VisitorTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${visitorTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(visitorTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /VisitorTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /VisitorTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${visitorTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /VisitorTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
