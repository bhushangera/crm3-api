import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { JobCards } from '.'

const app = () => express(apiRoot, routes)

let jobCards

beforeEach(async () => {
  jobCards = await JobCards.create({})
})

test('POST /JobCards 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /JobCards 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /JobCards/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${jobCards.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(jobCards.id)
})

test('GET /JobCards/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /JobCards/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${jobCards.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(jobCards.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /JobCards/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /JobCards/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${jobCards.id}`)
  expect(status).toBe(204)
})

test('DELETE /JobCards/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
