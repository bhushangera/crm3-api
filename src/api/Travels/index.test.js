import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Travels } from '.'

const app = () => express(apiRoot, routes)

let travels

beforeEach(async () => {
  travels = await Travels.create({})
})

test('POST /Travels 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Travels 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Travels/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${travels.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(travels.id)
})

test('GET /Travels/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Travels/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${travels.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(travels.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Travels/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Travels/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${travels.id}`)
  expect(status).toBe(204)
})

test('DELETE /Travels/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
