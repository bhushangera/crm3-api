import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Accountingquarters } from '.'

const app = () => express(apiRoot, routes)

let accountingquarters

beforeEach(async () => {
  accountingquarters = await Accountingquarters.create({})
})

test('POST /accountingquarters 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /accountingquarters 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /accountingquarters/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${accountingquarters.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(accountingquarters.id)
})

test('GET /accountingquarters/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /accountingquarters/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${accountingquarters.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(accountingquarters.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /accountingquarters/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /accountingquarters/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${accountingquarters.id}`)
  expect(status).toBe(204)
})

test('DELETE /accountingquarters/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
