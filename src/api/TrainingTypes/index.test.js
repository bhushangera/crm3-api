import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TrainingTypes } from '.'

const app = () => express(apiRoot, routes)

let trainingTypes

beforeEach(async () => {
  trainingTypes = await TrainingTypes.create({})
})

test('POST /TrainingTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /TrainingTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /TrainingTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${trainingTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(trainingTypes.id)
})

test('GET /TrainingTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /TrainingTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${trainingTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(trainingTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /TrainingTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /TrainingTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${trainingTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /TrainingTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
