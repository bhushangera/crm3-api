import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Holidays } from '.'

const app = () => express(apiRoot, routes)

let holidays

beforeEach(async () => {
  holidays = await Holidays.create({})
})

test('POST /Holidays 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Holidays 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Holidays/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${holidays.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(holidays.id)
})

test('GET /Holidays/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Holidays/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${holidays.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(holidays.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Holidays/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Holidays/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${holidays.id}`)
  expect(status).toBe(204)
})

test('DELETE /Holidays/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
