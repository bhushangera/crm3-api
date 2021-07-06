import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Materialrequests } from '.'

const app = () => express(apiRoot, routes)

let materialrequests

beforeEach(async () => {
  materialrequests = await Materialrequests.create({})
})

test('POST /materialrequests 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /materialrequests 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /materialrequests/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${materialrequests.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(materialrequests.id)
})

test('GET /materialrequests/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /materialrequests/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${materialrequests.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(materialrequests.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /materialrequests/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /materialrequests/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${materialrequests.id}`)
  expect(status).toBe(204)
})

test('DELETE /materialrequests/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
