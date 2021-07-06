import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Terminations } from '.'

const app = () => express(apiRoot, routes)

let terminations

beforeEach(async () => {
  terminations = await Terminations.create({})
})

test('POST /Terminations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Terminations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Terminations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${terminations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(terminations.id)
})

test('GET /Terminations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Terminations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${terminations.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(terminations.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Terminations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Terminations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${terminations.id}`)
  expect(status).toBe(204)
})

test('DELETE /Terminations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
