import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Todo } from '.'

const app = () => express(apiRoot, routes)

let todo

beforeEach(async () => {
  todo = await Todo.create({})
})

test('POST /todo 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /todo 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /todo/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${todo.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(todo.id)
})

test('GET /todo/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /todo/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${todo.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(todo.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /todo/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /todo/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${todo.id}`)
  expect(status).toBe(204)
})

test('DELETE /todo/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
