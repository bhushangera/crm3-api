import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ActivityLog } from '.'

const app = () => express(apiRoot, routes)

let activityLog

beforeEach(async () => {
  activityLog = await ActivityLog.create({})
})

test('POST /ActivityLog 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /ActivityLog 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ActivityLog/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${activityLog.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(activityLog.id)
})

test('GET /ActivityLog/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ActivityLog/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${activityLog.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(activityLog.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /ActivityLog/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ActivityLog/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${activityLog.id}`)
  expect(status).toBe(204)
})

test('DELETE /ActivityLog/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
