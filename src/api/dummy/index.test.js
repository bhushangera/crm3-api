import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Dummy } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, dummy

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  dummy = await Dummy.create({})
})

test('POST /dummy 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, first: 'test', second: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.first).toEqual('test')
  expect(body.second).toEqual('test')
})

test('POST /dummy 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /dummy 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /dummy 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /dummy 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /dummy 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /dummy/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${dummy.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dummy.id)
})

test('GET /dummy/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${dummy.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /dummy/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${dummy.id}`)
  expect(status).toBe(401)
})

test('GET /dummy/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /dummy/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${dummy.id}`)
    .send({ access_token: adminSession, first: 'test', second: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dummy.id)
  expect(body.first).toEqual('test')
  expect(body.second).toEqual('test')
})

test('PUT /dummy/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${dummy.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /dummy/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${dummy.id}`)
  expect(status).toBe(401)
})

test('PUT /dummy/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, first: 'test', second: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dummy/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dummy.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /dummy/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dummy.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /dummy/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dummy.id}`)
  expect(status).toBe(401)
})

test('DELETE /dummy/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
