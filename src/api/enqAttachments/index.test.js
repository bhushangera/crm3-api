import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { EnqAttachments } from '.'

const app = () => express(apiRoot, routes)

let enqAttachments

beforeEach(async () => {
  enqAttachments = await EnqAttachments.create({})
})

test('POST /enqAttachments 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ enqId: 'test', file: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.enqId).toEqual('test')
  expect(body.file).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /enqAttachments 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /enqAttachments/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${enqAttachments.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(enqAttachments.id)
})

test('GET /enqAttachments/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /enqAttachments/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${enqAttachments.id}`)
    .send({ enqId: 'test', file: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(enqAttachments.id)
  expect(body.enqId).toEqual('test')
  expect(body.file).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /enqAttachments/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ enqId: 'test', file: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /enqAttachments/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${enqAttachments.id}`)
  expect(status).toBe(204)
})

test('DELETE /enqAttachments/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
