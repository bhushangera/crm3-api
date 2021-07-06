import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Timeshifts } from '.'

const app = () => express(apiRoot, routes)

let timeshifts

beforeEach(async () => {
  timeshifts = await Timeshifts.create({})
})

test('POST /timeshifts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /timeshifts 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /timeshifts/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${timeshifts.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(timeshifts.id)
})

test('GET /timeshifts/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /timeshifts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${timeshifts.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(timeshifts.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /timeshifts/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /timeshifts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${timeshifts.id}`)
  expect(status).toBe(204)
})

test('DELETE /timeshifts/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
