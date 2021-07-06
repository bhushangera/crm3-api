import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ProjectMilestomes } from '.'

const app = () => express(apiRoot, routes)

let projectMilestomes

beforeEach(async () => {
  projectMilestomes = await ProjectMilestomes.create({})
})

test('POST /ProjectMilestomes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /ProjectMilestomes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ProjectMilestomes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${projectMilestomes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projectMilestomes.id)
})

test('GET /ProjectMilestomes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ProjectMilestomes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${projectMilestomes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projectMilestomes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /ProjectMilestomes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ProjectMilestomes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${projectMilestomes.id}`)
  expect(status).toBe(204)
})

test('DELETE /ProjectMilestomes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
