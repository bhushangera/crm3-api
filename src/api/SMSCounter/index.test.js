import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SmsCounter } from '.'

const app = () => express(apiRoot, routes)

let smsCounter

beforeEach(async () => {
  smsCounter = await SmsCounter.create({})
})

test('POST /SMSCounter 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /SMSCounter 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /SMSCounter/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${smsCounter.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(smsCounter.id)
})

test('GET /SMSCounter/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /SMSCounter/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${smsCounter.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(smsCounter.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /SMSCounter/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /SMSCounter/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${smsCounter.id}`)
  expect(status).toBe(204)
})

test('DELETE /SMSCounter/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
