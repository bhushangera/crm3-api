import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiShutter } from '.'

const app = () => express(apiRoot, routes)

let piShutter

beforeEach(async () => {
  piShutter = await PiShutter.create({})
})

test('POST /PIShutter 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
})

test('GET /PIShutter 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /PIShutter/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piShutter.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piShutter.id)
})

test('GET /PIShutter/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /PIShutter/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piShutter.id}`)
    .send({ code: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piShutter.id)
  expect(body.code).toEqual('test')
})

test('PUT /PIShutter/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test' })
  expect(status).toBe(404)
})

test('DELETE /PIShutter/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piShutter.id}`)
  expect(status).toBe(204)
})

test('DELETE /PIShutter/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
