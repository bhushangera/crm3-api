import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Teams } from '.'

const app = () => express(apiRoot, routes)

let teams

beforeEach(async () => {
  teams = await Teams.create({})
})

test('POST /Teams 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Teams 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Teams/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${teams.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(teams.id)
})

test('GET /Teams/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Teams/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${teams.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(teams.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Teams/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Teams/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${teams.id}`)
  expect(status).toBe(204)
})

test('DELETE /Teams/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
