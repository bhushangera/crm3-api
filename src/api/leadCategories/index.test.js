import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { LeadCategories } from '.'

const app = () => express(apiRoot, routes)

let leadCategories

beforeEach(async () => {
  leadCategories = await LeadCategories.create({})
})

test('POST /leadCategories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /leadCategories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /leadCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${leadCategories.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leadCategories.id)
})

test('GET /leadCategories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /leadCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${leadCategories.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leadCategories.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /leadCategories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /leadCategories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${leadCategories.id}`)
  expect(status).toBe(204)
})

test('DELETE /leadCategories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
