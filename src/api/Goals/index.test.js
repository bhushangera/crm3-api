import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Goals } from '.'

const app = () => express(apiRoot, routes)

let goals

beforeEach(async () => {
  goals = await Goals.create({})
})

test('POST /Goals 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Goals 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Goals/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${goals.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(goals.id)
})

test('GET /Goals/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Goals/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${goals.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(goals.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Goals/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Goals/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${goals.id}`)
  expect(status).toBe(204)
})

test('DELETE /Goals/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
