import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Colors } from '.'

const app = () => express(apiRoot, routes)

let colors

beforeEach(async () => {
  colors = await Colors.create({})
})

test('POST /colors 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', background: 'test', foreground: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.background).toEqual('test')
  expect(body.foreground).toEqual('test')
})

test('GET /colors 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /colors/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${colors.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(colors.id)
})

test('GET /colors/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /colors/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${colors.id}`)
    .send({ code: 'test', background: 'test', foreground: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(colors.id)
  expect(body.code).toEqual('test')
  expect(body.background).toEqual('test')
  expect(body.foreground).toEqual('test')
})

test('PUT /colors/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', background: 'test', foreground: 'test' })
  expect(status).toBe(404)
})

test('DELETE /colors/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${colors.id}`)
  expect(status).toBe(204)
})

test('DELETE /colors/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
