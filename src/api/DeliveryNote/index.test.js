import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { DeliveryNote } from '.'

const app = () => express(apiRoot, routes)

let deliveryNote

beforeEach(async () => {
  deliveryNote = await DeliveryNote.create({})
})

test('POST /DeliveryNote 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /DeliveryNote 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /DeliveryNote/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${deliveryNote.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(deliveryNote.id)
})

test('GET /DeliveryNote/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /DeliveryNote/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${deliveryNote.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(deliveryNote.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /DeliveryNote/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /DeliveryNote/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${deliveryNote.id}`)
  expect(status).toBe(204)
})

test('DELETE /DeliveryNote/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
