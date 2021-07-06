import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Icons } from '.'

const app = () => express(apiRoot, routes)

let icons

beforeEach(async () => {
  icons = await Icons.create({})
})

test('POST /icons 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ class: 'test', label: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.class).toEqual('test')
  expect(body.label).toEqual('test')
})

test('GET /icons 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /icons/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${icons.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(icons.id)
})

test('GET /icons/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /icons/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${icons.id}`)
    .send({ class: 'test', label: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(icons.id)
  expect(body.class).toEqual('test')
  expect(body.label).toEqual('test')
})

test('PUT /icons/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ class: 'test', label: 'test' })
  expect(status).toBe(404)
})

test('DELETE /icons/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${icons.id}`)
  expect(status).toBe(204)
})

test('DELETE /icons/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
