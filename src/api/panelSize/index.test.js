import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PanelSize } from '.'

const app = () => express(apiRoot, routes)

let panelSize

beforeEach(async () => {
  panelSize = await PanelSize.create({})
})

test('POST /panelSize 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /panelSize 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /panelSize/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${panelSize.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(panelSize.id)
})

test('GET /panelSize/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /panelSize/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${panelSize.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(panelSize.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /panelSize/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /panelSize/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${panelSize.id}`)
  expect(status).toBe(204)
})

test('DELETE /panelSize/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
