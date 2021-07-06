import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TenderTypes } from '.'

const app = () => express(apiRoot, routes)

let tenderTypes

beforeEach(async () => {
  tenderTypes = await TenderTypes.create({})
})

test('POST /tenderTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /tenderTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tenderTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${tenderTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tenderTypes.id)
})

test('GET /tenderTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tenderTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${tenderTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tenderTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /tenderTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tenderTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${tenderTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /tenderTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
