import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Countries } from '.'

const app = () => express(apiRoot, routes)

let countries

beforeEach(async () => {
  countries = await Countries.create({})
})

test('POST /countries 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', name: 'test', regionId: 'test', prefix: 'test', currency: 'test', currencyCode: 'test', USDFactor: 'test', INRFactor: 'test', PrimaryLanguage: 'test', alternateLanguage: 'test', slug: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.regionId).toEqual('test')
  expect(body.prefix).toEqual('test')
  expect(body.currency).toEqual('test')
  expect(body.currencyCode).toEqual('test')
  expect(body.USDFactor).toEqual('test')
  expect(body.INRFactor).toEqual('test')
  expect(body.PrimaryLanguage).toEqual('test')
  expect(body.alternateLanguage).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('GET /countries 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /countries/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${countries.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(countries.id)
})

test('GET /countries/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /countries/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${countries.id}`)
    .send({ code: 'test', name: 'test', regionId: 'test', prefix: 'test', currency: 'test', currencyCode: 'test', USDFactor: 'test', INRFactor: 'test', PrimaryLanguage: 'test', alternateLanguage: 'test', slug: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(countries.id)
  expect(body.code).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.regionId).toEqual('test')
  expect(body.prefix).toEqual('test')
  expect(body.currency).toEqual('test')
  expect(body.currencyCode).toEqual('test')
  expect(body.USDFactor).toEqual('test')
  expect(body.INRFactor).toEqual('test')
  expect(body.PrimaryLanguage).toEqual('test')
  expect(body.alternateLanguage).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('PUT /countries/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', name: 'test', regionId: 'test', prefix: 'test', currency: 'test', currencyCode: 'test', USDFactor: 'test', INRFactor: 'test', PrimaryLanguage: 'test', alternateLanguage: 'test', slug: 'test' })
  expect(status).toBe(404)
})

test('DELETE /countries/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${countries.id}`)
  expect(status).toBe(204)
})

test('DELETE /countries/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
