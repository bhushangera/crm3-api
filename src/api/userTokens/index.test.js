import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { UserTokens } from '.'

const app = () => express(apiRoot, routes)

let userTokens

beforeEach(async () => {
  userTokens = await UserTokens.create({})
})

test('POST /userTokens 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ userId: 'test', token: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.token).toEqual('test')
})

test('GET /userTokens 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /userTokens/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${userTokens.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(userTokens.id)
})

test('GET /userTokens/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /userTokens/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${userTokens.id}`)
    .send({ userId: 'test', token: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(userTokens.id)
  expect(body.userId).toEqual('test')
  expect(body.token).toEqual('test')
})

test('PUT /userTokens/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ userId: 'test', token: 'test' })
  expect(status).toBe(404)
})

test('DELETE /userTokens/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${userTokens.id}`)
  expect(status).toBe(204)
})

test('DELETE /userTokens/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
