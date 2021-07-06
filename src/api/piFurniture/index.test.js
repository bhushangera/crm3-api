import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiFurniture } from '.'

const app = () => express(apiRoot, routes)

let piFurniture

beforeEach(async () => {
  piFurniture = await PiFurniture.create({})
})

test('POST /piFurniture 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /piFurniture 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /piFurniture/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piFurniture.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piFurniture.id)
})

test('GET /piFurniture/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /piFurniture/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piFurniture.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piFurniture.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /piFurniture/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /piFurniture/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piFurniture.id}`)
  expect(status).toBe(204)
})

test('DELETE /piFurniture/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
