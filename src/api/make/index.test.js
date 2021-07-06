import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Make } from '.'

const app = () => express(apiRoot, routes)

let make

beforeEach(async () => {
  make = await Make.create({})
})

test('POST /makes 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, makeCode.makeName: 'test', isBaseProvider: 'test', isFinishingProvider: 'test', isAccessoryProvider: 'test', isHardwareProvider: 'test', isActive: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.makeCode.makeName).toEqual('test')
  expect(body.isBaseProvider).toEqual('test')
  expect(body.isFinishingProvider).toEqual('test')
  expect(body.isAccessoryProvider).toEqual('test')
  expect(body.isHardwareProvider).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('POST /makes 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /makes 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /makes 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /makes/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${make.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(make.id)
})

test('GET /makes/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${make.id}`)
  expect(status).toBe(401)
})

test('GET /makes/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /makes/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${make.id}`)
    .send({ access_token: masterKey, makeCode.makeName: 'test', isBaseProvider: 'test', isFinishingProvider: 'test', isAccessoryProvider: 'test', isHardwareProvider: 'test', isActive: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(make.id)
  expect(body.makeCode.makeName).toEqual('test')
  expect(body.isBaseProvider).toEqual('test')
  expect(body.isFinishingProvider).toEqual('test')
  expect(body.isAccessoryProvider).toEqual('test')
  expect(body.isHardwareProvider).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('PUT /makes/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${make.id}`)
  expect(status).toBe(401)
})

test('PUT /makes/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, makeCode.makeName: 'test', isBaseProvider: 'test', isFinishingProvider: 'test', isAccessoryProvider: 'test', isHardwareProvider: 'test', isActive: 'test' })
  expect(status).toBe(404)
})

test('DELETE /makes/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${make.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /makes/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${make.id}`)
  expect(status).toBe(401)
})

test('DELETE /makes/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
