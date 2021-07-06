import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Company } from '.'

const app = () => express(apiRoot, routes)

let company

beforeEach(async () => {
  company = await Company.create({})
})

test('POST /company 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
})

test('POST /company 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /company 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /company 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /company/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${company.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(company.id)
})

test('GET /company/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${company.id}`)
  expect(status).toBe(401)
})

test('GET /company/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /company/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${company.id}`)
    .send({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(company.id)
})

test('PUT /company/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${company.id}`)
  expect(status).toBe(401)
})

test('PUT /company/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey })
  expect(status).toBe(404)
})

test('DELETE /company/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${company.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /company/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${company.id}`)
  expect(status).toBe(401)
})

test('DELETE /company/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
