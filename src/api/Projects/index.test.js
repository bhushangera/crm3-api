import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Projects } from '.'

const app = () => express(apiRoot, routes)

let projects

beforeEach(async () => {
  projects = await Projects.create({})
})

test('POST /Projects 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Projects 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Projects/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${projects.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projects.id)
})

test('GET /Projects/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Projects/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${projects.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projects.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Projects/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Projects/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${projects.id}`)
  expect(status).toBe(204)
})

test('DELETE /Projects/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
