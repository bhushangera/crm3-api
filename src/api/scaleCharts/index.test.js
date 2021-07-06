import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ScaleCharts } from '.'

const app = () => express(apiRoot, routes)

let scaleCharts

beforeEach(async () => {
  scaleCharts = await ScaleCharts.create({})
})

test('POST /scaleCharts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ mm: 'test', in: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.mm).toEqual('test')
  expect(body.in).toEqual('test')
})

test('GET /scaleCharts 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /scaleCharts/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${scaleCharts.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(scaleCharts.id)
})

test('GET /scaleCharts/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /scaleCharts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${scaleCharts.id}`)
    .send({ mm: 'test', in: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(scaleCharts.id)
  expect(body.mm).toEqual('test')
  expect(body.in).toEqual('test')
})

test('PUT /scaleCharts/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ mm: 'test', in: 'test' })
  expect(status).toBe(404)
})

test('DELETE /scaleCharts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${scaleCharts.id}`)
  expect(status).toBe(204)
})

test('DELETE /scaleCharts/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
