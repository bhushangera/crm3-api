import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { GoalTypes } from '.'

const app = () => express(apiRoot, routes)

let goalTypes

beforeEach(async () => {
  goalTypes = await GoalTypes.create({})
})

test('POST /GoalTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /GoalTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /GoalTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${goalTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(goalTypes.id)
})

test('GET /GoalTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /GoalTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${goalTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(goalTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /GoalTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /GoalTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${goalTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /GoalTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
