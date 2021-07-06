import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Tenders } from '.'

const app = () => express(apiRoot, routes)

let tenders

beforeEach(async () => {
  tenders = await Tenders.create({})
})

test('POST /tenders 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /tenders 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tenders/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${tenders.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tenders.id)
})

test('GET /tenders/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tenders/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${tenders.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tenders.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /tenders/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tenders/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${tenders.id}`)
  expect(status).toBe(204)
})

test('DELETE /tenders/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
