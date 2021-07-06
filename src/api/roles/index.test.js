import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Roles } from '.'

const app = () => express(apiRoot, routes)

let roles

beforeEach(async () => {
  roles = await Roles.create({})
})

test('POST /roles 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ title: 'test', permissions: 'test', isCoreRole: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.permissions).toEqual('test')
  expect(body.isCoreRole).toEqual('test')
})

test('GET /roles 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /roles/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${roles.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(roles.id)
})

test('GET /roles/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /roles/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${roles.id}`)
    .send({ title: 'test', permissions: 'test', isCoreRole: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(roles.id)
  expect(body.title).toEqual('test')
  expect(body.permissions).toEqual('test')
  expect(body.isCoreRole).toEqual('test')
})

test('PUT /roles/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ title: 'test', permissions: 'test', isCoreRole: 'test' })
  expect(status).toBe(404)
})

test('DELETE /roles/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${roles.id}`)
  expect(status).toBe(204)
})

test('DELETE /roles/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
