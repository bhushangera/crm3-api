import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiPanel } from '.'

const app = () => express(apiRoot, routes)

let piPanel

beforeEach(async () => {
  piPanel = await PiPanel.create({})
})

test('POST /piPanel 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /piPanel 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /piPanel/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piPanel.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piPanel.id)
})

test('GET /piPanel/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /piPanel/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piPanel.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piPanel.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /piPanel/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /piPanel/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piPanel.id}`)
  expect(status).toBe(204)
})

test('DELETE /piPanel/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
