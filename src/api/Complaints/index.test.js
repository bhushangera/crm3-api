import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Complaints } from '.'

const app = () => express(apiRoot, routes)

let complaints

beforeEach(async () => {
  complaints = await Complaints.create({})
})

test('POST /Complaints 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Complaints 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Complaints/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${complaints.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(complaints.id)
})

test('GET /Complaints/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Complaints/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${complaints.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(complaints.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Complaints/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Complaints/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${complaints.id}`)
  expect(status).toBe(204)
})

test('DELETE /Complaints/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
