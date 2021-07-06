import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ProjectCategories } from '.'

const app = () => express(apiRoot, routes)

let projectCategories

beforeEach(async () => {
  projectCategories = await ProjectCategories.create({})
})

test('POST /ProjectCategories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /ProjectCategories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ProjectCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${projectCategories.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projectCategories.id)
})

test('GET /ProjectCategories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ProjectCategories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${projectCategories.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projectCategories.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /ProjectCategories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ProjectCategories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${projectCategories.id}`)
  expect(status).toBe(204)
})

test('DELETE /ProjectCategories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
