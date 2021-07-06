import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Trainers } from '.'

const app = () => express(apiRoot, routes)

let trainers

beforeEach(async () => {
  trainers = await Trainers.create({})
})

test('POST /Trainers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Trainers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Trainers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${trainers.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(trainers.id)
})

test('GET /Trainers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Trainers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${trainers.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(trainers.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Trainers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Trainers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${trainers.id}`)
  expect(status).toBe(204)
})

test('DELETE /Trainers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
