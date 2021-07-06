import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SalesEnquiries } from '.'

const app = () => express(apiRoot, routes)

let salesEnquiries

beforeEach(async () => {
  salesEnquiries = await SalesEnquiries.create({})
})

test('POST /salesEnquiries 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /salesEnquiries 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /salesEnquiries/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${salesEnquiries.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salesEnquiries.id)
})

test('GET /salesEnquiries/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /salesEnquiries/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${salesEnquiries.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salesEnquiries.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /salesEnquiries/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /salesEnquiries/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${salesEnquiries.id}`)
  expect(status).toBe(204)
})

test('DELETE /salesEnquiries/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
