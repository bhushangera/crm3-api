import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiModular } from '.'

const app = () => express(apiRoot, routes)

let piModular

beforeEach(async () => {
  piModular = await PiModular.create({})
})

test('POST /piModular 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /piModular 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /piModular/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piModular.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piModular.id)
})

test('GET /piModular/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /piModular/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piModular.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piModular.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /piModular/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /piModular/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piModular.id}`)
  expect(status).toBe(204)
})

test('DELETE /piModular/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
