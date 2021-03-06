import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Leads } from '.'

const app = () => express(apiRoot, routes)

let leads

beforeEach(async () => {
  leads = await Leads.create({})
})

test('POST /leads 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', mobile: 'test', email: 'test', city: 'test', for: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.for).toEqual('test')
})

test('GET /leads 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /leads/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${leads.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leads.id)
})

test('GET /leads/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /leads/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${leads.id}`)
    .send({ name: 'test', mobile: 'test', email: 'test', city: 'test', for: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leads.id)
  expect(body.name).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.for).toEqual('test')
})

test('PUT /leads/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', mobile: 'test', email: 'test', city: 'test', for: 'test' })
  expect(status).toBe(404)
})

test('DELETE /leads/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${leads.id}`)
  expect(status).toBe(204)
})

test('DELETE /leads/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
