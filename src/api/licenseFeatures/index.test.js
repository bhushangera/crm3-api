import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { LicenseFeatures } from '.'

const app = () => express(apiRoot, routes)

let licenseFeatures

beforeEach(async () => {
  licenseFeatures = await LicenseFeatures.create({})
})

test('POST /licenseFeatures 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ licenseId: 'test', fmId: 'test', code: 'test', label: 'test', dailyCost: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.licenseId).toEqual('test')
  expect(body.fmId).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.label).toEqual('test')
  expect(body.dailyCost).toEqual('test')
})

test('GET /licenseFeatures 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /licenseFeatures/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${licenseFeatures.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(licenseFeatures.id)
})

test('GET /licenseFeatures/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /licenseFeatures/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${licenseFeatures.id}`)
    .send({ licenseId: 'test', fmId: 'test', code: 'test', label: 'test', dailyCost: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(licenseFeatures.id)
  expect(body.licenseId).toEqual('test')
  expect(body.fmId).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.label).toEqual('test')
  expect(body.dailyCost).toEqual('test')
})

test('PUT /licenseFeatures/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ licenseId: 'test', fmId: 'test', code: 'test', label: 'test', dailyCost: 'test' })
  expect(status).toBe(404)
})

test('DELETE /licenseFeatures/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${licenseFeatures.id}`)
  expect(status).toBe(204)
})

test('DELETE /licenseFeatures/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
