import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { JobApplications } from '.'

const app = () => express(apiRoot, routes)

let jobApplications

beforeEach(async () => {
  jobApplications = await JobApplications.create({})
})

test('POST /JobApplications 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /JobApplications 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /JobApplications/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${jobApplications.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(jobApplications.id)
})

test('GET /JobApplications/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /JobApplications/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${jobApplications.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(jobApplications.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /JobApplications/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /JobApplications/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${jobApplications.id}`)
  expect(status).toBe(204)
})

test('DELETE /JobApplications/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
