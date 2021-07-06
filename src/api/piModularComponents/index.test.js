import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiModularComponents } from '.'

const app = () => express(apiRoot, routes)

let piModularComponents

beforeEach(async () => {
  piModularComponents = await PiModularComponents.create({})
})

test('POST /piModularComponents 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ id: 'test', code: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual('test')
  expect(body.code).toEqual('test')
})

test('GET /piModularComponents 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /piModularComponents/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piModularComponents.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piModularComponents.id)
})

test('GET /piModularComponents/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /piModularComponents/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piModularComponents.id}`)
    .send({ id: 'test', code: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piModularComponents.id)
  expect(body.id).toEqual('test')
  expect(body.code).toEqual('test')
})

test('PUT /piModularComponents/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ id: 'test', code: 'test' })
  expect(status).toBe(404)
})

test('DELETE /piModularComponents/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piModularComponents.id}`)
  expect(status).toBe(204)
})

test('DELETE /piModularComponents/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
