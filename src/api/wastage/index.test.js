import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Wastage } from '.'

const app = () => express(apiRoot, routes)

let wastage

beforeEach(async () => {
  wastage = await Wastage.create({})
})

test('POST /wastage 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ carcase: 'test', shutter: 'test', back: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.carcase).toEqual('test')
  expect(body.shutter).toEqual('test')
  expect(body.back).toEqual('test')
})

test('GET /wastage 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /wastage/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${wastage.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(wastage.id)
})

test('GET /wastage/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /wastage/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${wastage.id}`)
    .send({ carcase: 'test', shutter: 'test', back: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(wastage.id)
  expect(body.carcase).toEqual('test')
  expect(body.shutter).toEqual('test')
  expect(body.back).toEqual('test')
})

test('PUT /wastage/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ carcase: 'test', shutter: 'test', back: 'test' })
  expect(status).toBe(404)
})

test('DELETE /wastage/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${wastage.id}`)
  expect(status).toBe(204)
})

test('DELETE /wastage/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
