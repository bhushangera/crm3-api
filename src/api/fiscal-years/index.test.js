import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { FiscalYears } from '.'

const app = () => express(apiRoot, routes)

let fiscalYears

beforeEach(async () => {
  fiscalYears = await FiscalYears.create({})
})

test('POST /fiscal-years 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.startDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /fiscal-years 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /fiscal-years/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${fiscalYears.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fiscalYears.id)
})

test('GET /fiscal-years/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /fiscal-years/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${fiscalYears.id}`)
    .send({ code: 'test', description: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fiscalYears.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.startDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /fiscal-years/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /fiscal-years/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${fiscalYears.id}`)
  expect(status).toBe(204)
})

test('DELETE /fiscal-years/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
