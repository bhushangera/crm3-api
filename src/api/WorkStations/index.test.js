import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WorkStations } from '.'

const app = () => express(apiRoot, routes)

let workStations

beforeEach(async () => {
  workStations = await WorkStations.create({})
})

test('POST /WorkStations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /WorkStations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /WorkStations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${workStations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workStations.id)
})

test('GET /WorkStations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /WorkStations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${workStations.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workStations.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /WorkStations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /WorkStations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${workStations.id}`)
  expect(status).toBe(204)
})

test('DELETE /WorkStations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
