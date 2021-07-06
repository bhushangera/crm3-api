import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { EntityGroups } from '.'

const app = () => express(apiRoot, routes)

let entityGroups

beforeEach(async () => {
  entityGroups = await EntityGroups.create({})
})

test('POST /entityGroups 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /entityGroups 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /entityGroups/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${entityGroups.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(entityGroups.id)
})

test('GET /entityGroups/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /entityGroups/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${entityGroups.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(entityGroups.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /entityGroups/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /entityGroups/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${entityGroups.id}`)
  expect(status).toBe(204)
})

test('DELETE /entityGroups/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
