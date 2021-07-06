import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Postal } from '.'

const app = () => express(apiRoot, routes)

let postal

beforeEach(async () => {
  postal = await Postal.create({})
})

test('POST /Postal 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Postal 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Postal/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${postal.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(postal.id)
})

test('GET /Postal/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Postal/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${postal.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(postal.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Postal/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Postal/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${postal.id}`)
  expect(status).toBe(204)
})

test('DELETE /Postal/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
