import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Contactus } from '.'

const app = () => express(apiRoot, routes)

let contactus

beforeEach(async () => {
  contactus = await Contactus.create({})
})

test('POST /contactus 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', email: 'test', subject: 'test', telephone: 'test', message: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.subject).toEqual('test')
  expect(body.telephone).toEqual('test')
  expect(body.message).toEqual('test')
})

test('GET /contactus 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /contactus/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${contactus.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contactus.id)
})

test('GET /contactus/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /contactus/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${contactus.id}`)
    .send({ name: 'test', email: 'test', subject: 'test', telephone: 'test', message: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contactus.id)
  expect(body.name).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.subject).toEqual('test')
  expect(body.telephone).toEqual('test')
  expect(body.message).toEqual('test')
})

test('PUT /contactus/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', email: 'test', subject: 'test', telephone: 'test', message: 'test' })
  expect(status).toBe(404)
})

test('DELETE /contactus/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${contactus.id}`)
  expect(status).toBe(204)
})

test('DELETE /contactus/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
