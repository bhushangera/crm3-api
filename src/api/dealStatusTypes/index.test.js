import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { DealStatusTypes } from '.'

const app = () => express(apiRoot, routes)

let dealStatusTypes

beforeEach(async () => {
  dealStatusTypes = await DealStatusTypes.create({})
})

test('POST /dealStatusTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /dealStatusTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /dealStatusTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${dealStatusTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dealStatusTypes.id)
})

test('GET /dealStatusTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /dealStatusTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${dealStatusTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dealStatusTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /dealStatusTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dealStatusTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dealStatusTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /dealStatusTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
