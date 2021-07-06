import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { LeadStatusCodes } from '.'

const app = () => express(apiRoot, routes)

let leadStatusCodes

beforeEach(async () => {
  leadStatusCodes = await LeadStatusCodes.create({})
})

test('POST /leadStatusCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /leadStatusCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /leadStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${leadStatusCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leadStatusCodes.id)
})

test('GET /leadStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /leadStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${leadStatusCodes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leadStatusCodes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /leadStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /leadStatusCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${leadStatusCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /leadStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
