import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { AccountingPeriods } from '.'

const app = () => express(apiRoot, routes)

let accountingPeriods

beforeEach(async () => {
  accountingPeriods = await AccountingPeriods.create({})
})

test('POST /accountingPeriods 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.startDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /accountingPeriods 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /accountingPeriods/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${accountingPeriods.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(accountingPeriods.id)
})

test('GET /accountingPeriods/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /accountingPeriods/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${accountingPeriods.id}`)
    .send({ code: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(accountingPeriods.id)
  expect(body.code).toEqual('test')
  expect(body.startDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /accountingPeriods/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /accountingPeriods/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${accountingPeriods.id}`)
  expect(status).toBe(204)
})

test('DELETE /accountingPeriods/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
