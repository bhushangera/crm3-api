import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PartCodes } from '.'

const app = () => express(apiRoot, routes)

let partCodes

beforeEach(async () => {
  partCodes = await PartCodes.create({})
})

test('POST /partCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ partCategoryId: 'test', partCode: 'test', kitchenOnly: 'test', carcaseOnly: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.partCategoryId).toEqual('test')
  expect(body.partCode).toEqual('test')
  expect(body.kitchenOnly).toEqual('test')
  expect(body.carcaseOnly).toEqual('test')
})

test('GET /partCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /partCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${partCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partCodes.id)
})

test('GET /partCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /partCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${partCodes.id}`)
    .send({ partCategoryId: 'test', partCode: 'test', kitchenOnly: 'test', carcaseOnly: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partCodes.id)
  expect(body.partCategoryId).toEqual('test')
  expect(body.partCode).toEqual('test')
  expect(body.kitchenOnly).toEqual('test')
  expect(body.carcaseOnly).toEqual('test')
})

test('PUT /partCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ partCategoryId: 'test', partCode: 'test', kitchenOnly: 'test', carcaseOnly: 'test' })
  expect(status).toBe(404)
})

test('DELETE /partCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${partCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /partCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
