import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Sms } from '.'

const app = () => express(apiRoot, routes)

let sms

beforeEach(async () => {
  sms = await Sms.create({})
})

test('POST /sms 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /sms 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /sms/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${sms.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sms.id)
})

test('GET /sms/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /sms/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${sms.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sms.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /sms/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /sms/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${sms.id}`)
  expect(status).toBe(204)
})

test('DELETE /sms/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
