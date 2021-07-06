import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PromoEmails } from '.'

const app = () => express(apiRoot, routes)

let promoEmails

beforeEach(async () => {
  promoEmails = await PromoEmails.create({})
})

test('POST /PromoEmails 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /PromoEmails 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /PromoEmails/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${promoEmails.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(promoEmails.id)
})

test('GET /PromoEmails/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /PromoEmails/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${promoEmails.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(promoEmails.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /PromoEmails/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /PromoEmails/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${promoEmails.id}`)
  expect(status).toBe(204)
})

test('DELETE /PromoEmails/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
