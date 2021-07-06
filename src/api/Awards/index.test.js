import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Awards } from '.'

const app = () => express(apiRoot, routes)

let awards

beforeEach(async () => {
  awards = await Awards.create({})
})

test('POST /Awards 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Awards 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Awards/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${awards.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(awards.id)
})

test('GET /Awards/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Awards/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${awards.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(awards.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Awards/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Awards/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${awards.id}`)
  expect(status).toBe(204)
})

test('DELETE /Awards/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
