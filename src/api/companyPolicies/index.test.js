import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CompanyPolicies } from '.'

const app = () => express(apiRoot, routes)

let companyPolicies

beforeEach(async () => {
  companyPolicies = await CompanyPolicies.create({})
})

test('POST /companyPolicies 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /companyPolicies 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /companyPolicies/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${companyPolicies.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(companyPolicies.id)
})

test('GET /companyPolicies/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /companyPolicies/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${companyPolicies.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(companyPolicies.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /companyPolicies/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /companyPolicies/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${companyPolicies.id}`)
  expect(status).toBe(204)
})

test('DELETE /companyPolicies/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
