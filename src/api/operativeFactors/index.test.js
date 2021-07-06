import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { OperativeFactors } from '.'

const app = () => express(apiRoot, routes)

let operativeFactors

beforeEach(async () => {
  operativeFactors = await OperativeFactors.create({})
})

test('POST /operativeFactors 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /operativeFactors 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /operativeFactors/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${operativeFactors.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(operativeFactors.id)
})

test('GET /operativeFactors/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /operativeFactors/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${operativeFactors.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(operativeFactors.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /operativeFactors/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /operativeFactors/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${operativeFactors.id}`)
  expect(status).toBe(204)
})

test('DELETE /operativeFactors/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
