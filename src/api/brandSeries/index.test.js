import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { BrandSeries } from '.'

const app = () => express(apiRoot, routes)

let userSession, brandSeries

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  userSession = signSync(user.id)
  brandSeries = await BrandSeries.create({})
})

test('POST /brandSeries 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, materialBrandId: 'test', series: 'test', slug: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.materialBrandId).toEqual('test')
  expect(body.series).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('POST /brandSeries 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /brandSeries 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /brandSeries 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /brandSeries/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${brandSeries.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(brandSeries.id)
})

test('GET /brandSeries/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${brandSeries.id}`)
  expect(status).toBe(401)
})

test('GET /brandSeries/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /brandSeries/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${brandSeries.id}`)
    .send({ access_token: userSession, materialBrandId: 'test', series: 'test', slug: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(brandSeries.id)
  expect(body.materialBrandId).toEqual('test')
  expect(body.series).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('PUT /brandSeries/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${brandSeries.id}`)
  expect(status).toBe(401)
})

test('PUT /brandSeries/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: userSession, materialBrandId: 'test', series: 'test', slug: 'test' })
  expect(status).toBe(404)
})

test('DELETE /brandSeries/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${brandSeries.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /brandSeries/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${brandSeries.id}`)
  expect(status).toBe(401)
})

test('DELETE /brandSeries/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})
