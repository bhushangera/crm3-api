import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Units } from '.'

const app = () => express(apiRoot, routes)

let units

beforeEach(async () => {
  units = await Units.create({})
})

test('POST /units 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ group: 'test', unit: 'test', symbol: 'test', slug: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.group).toEqual('test')
  expect(body.unit).toEqual('test')
  expect(body.symbol).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('GET /units 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /units/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${units.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(units.id)
})

test('GET /units/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /units/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${units.id}`)
    .send({ group: 'test', unit: 'test', symbol: 'test', slug: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(units.id)
  expect(body.group).toEqual('test')
  expect(body.unit).toEqual('test')
  expect(body.symbol).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('PUT /units/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ group: 'test', unit: 'test', symbol: 'test', slug: 'test' })
  expect(status).toBe(404)
})

test('DELETE /units/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${units.id}`)
  expect(status).toBe(204)
})

test('DELETE /units/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
