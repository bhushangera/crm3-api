import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WebsiteSettings } from '.'

const app = () => express(apiRoot, routes)

let websiteSettings

beforeEach(async () => {
  websiteSettings = await WebsiteSettings.create({})
})

test('POST /websiteSettings 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /websiteSettings 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /websiteSettings/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${websiteSettings.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(websiteSettings.id)
})

test('GET /websiteSettings/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /websiteSettings/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${websiteSettings.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(websiteSettings.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /websiteSettings/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /websiteSettings/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${websiteSettings.id}`)
  expect(status).toBe(204)
})

test('DELETE /websiteSettings/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
