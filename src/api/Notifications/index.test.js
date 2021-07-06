import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Notifications } from '.'

const app = () => express(apiRoot, routes)

let notifications

beforeEach(async () => {
  notifications = await Notifications.create({})
})

test('POST /Notifications 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Notifications 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Notifications/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${notifications.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(notifications.id)
})

test('GET /Notifications/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Notifications/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${notifications.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(notifications.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Notifications/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Notifications/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${notifications.id}`)
  expect(status).toBe(204)
})

test('DELETE /Notifications/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
