import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiCarcase } from '.'

const app = () => express(apiRoot, routes)

let piCarcase

beforeEach(async () => {
  piCarcase = await PiCarcase.create({})
})

test('POST /piCarcase 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ piId: 'test', piArticleId: 'test', H: 'test', W: 'test', D: 'test', qty: 'test', sqft: 'test', rate: 'test', gst: 'test', amt: 'test', tAmt: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.piId).toEqual('test')
  expect(body.piArticleId).toEqual('test')
  expect(body.H).toEqual('test')
  expect(body.W).toEqual('test')
  expect(body.D).toEqual('test')
  expect(body.qty).toEqual('test')
  expect(body.sqft).toEqual('test')
  expect(body.rate).toEqual('test')
  expect(body.gst).toEqual('test')
  expect(body.amt).toEqual('test')
  expect(body.tAmt).toEqual('test')
})

test('GET /piCarcase 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /piCarcase/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piCarcase.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piCarcase.id)
})

test('GET /piCarcase/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /piCarcase/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piCarcase.id}`)
    .send({ piId: 'test', piArticleId: 'test', H: 'test', W: 'test', D: 'test', qty: 'test', sqft: 'test', rate: 'test', gst: 'test', amt: 'test', tAmt: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piCarcase.id)
  expect(body.piId).toEqual('test')
  expect(body.piArticleId).toEqual('test')
  expect(body.H).toEqual('test')
  expect(body.W).toEqual('test')
  expect(body.D).toEqual('test')
  expect(body.qty).toEqual('test')
  expect(body.sqft).toEqual('test')
  expect(body.rate).toEqual('test')
  expect(body.gst).toEqual('test')
  expect(body.amt).toEqual('test')
  expect(body.tAmt).toEqual('test')
})

test('PUT /piCarcase/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ piId: 'test', piArticleId: 'test', H: 'test', W: 'test', D: 'test', qty: 'test', sqft: 'test', rate: 'test', gst: 'test', amt: 'test', tAmt: 'test' })
  expect(status).toBe(404)
})

test('DELETE /piCarcase/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piCarcase.id}`)
  expect(status).toBe(204)
})

test('DELETE /piCarcase/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
