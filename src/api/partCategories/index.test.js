import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PartCategories } from '.'

const app = () => express(apiRoot, routes)

let partCategories

beforeEach(async () => {
  partCategories = await PartCategories.create({})
})

test('POST /partCategories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ category: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.category).toEqual('test')
})

test('GET /partCategories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /partCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${partCategories.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partCategories.id)
})

test('GET /partCategories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /partCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${partCategories.id}`)
    .send({ category: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partCategories.id)
  expect(body.category).toEqual('test')
})

test('PUT /partCategories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ category: 'test' })
  expect(status).toBe(404)
})

test('DELETE /partCategories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${partCategories.id}`)
  expect(status).toBe(204)
})

test('DELETE /partCategories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
