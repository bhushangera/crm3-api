import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Activities } from '.'

const app = () => express(apiRoot, routes)

let activities

beforeEach(async () => {
  activities = await Activities.create({})
})

test('POST /activities 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /activities 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /activities/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${activities.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(activities.id)
})

test('GET /activities/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /activities/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${activities.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(activities.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /activities/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /activities/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${activities.id}`)
  expect(status).toBe(204)
})

test('DELETE /activities/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
