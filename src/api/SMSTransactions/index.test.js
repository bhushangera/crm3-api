import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SmsTransactions } from '.'

const app = () => express(apiRoot, routes)

let smsTransactions

beforeEach(async () => {
  smsTransactions = await SmsTransactions.create({})
})

test('POST /SMSTransactions 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /SMSTransactions 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /SMSTransactions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${smsTransactions.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(smsTransactions.id)
})

test('GET /SMSTransactions/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /SMSTransactions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${smsTransactions.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(smsTransactions.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /SMSTransactions/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /SMSTransactions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${smsTransactions.id}`)
  expect(status).toBe(204)
})

test('DELETE /SMSTransactions/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
