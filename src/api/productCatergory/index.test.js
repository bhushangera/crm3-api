import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ProductCatergory } from '.'

const app = () => express(apiRoot, routes)

let productCatergory

beforeEach(async () => {
  productCatergory = await ProductCatergory.create({})
})

test('POST /productCatergories 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
})

test('POST /productCatergories 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /productCatergories 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /productCatergories 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /productCatergories/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${productCatergory.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productCatergory.id)
})

test('GET /productCatergories/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${productCatergory.id}`)
  expect(status).toBe(401)
})

test('GET /productCatergories/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /productCatergories/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${productCatergory.id}`)
    .send({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(productCatergory.id)
})

test('PUT /productCatergories/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${productCatergory.id}`)
  expect(status).toBe(401)
})

test('PUT /productCatergories/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey })
  expect(status).toBe(404)
})

test('DELETE /productCatergories/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${productCatergory.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /productCatergories/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${productCatergory.id}`)
  expect(status).toBe(401)
})

test('DELETE /productCatergories/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
