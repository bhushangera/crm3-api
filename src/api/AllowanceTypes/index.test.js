import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { AllowanceTypes } from '.'

const app = () => express(apiRoot, routes)

let allowanceTypes

beforeEach(async () => {
  allowanceTypes = await AllowanceTypes.create({})
})

test('POST /AllowanceTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /AllowanceTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /AllowanceTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${allowanceTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(allowanceTypes.id)
})

test('GET /AllowanceTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /AllowanceTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${allowanceTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(allowanceTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /AllowanceTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /AllowanceTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${allowanceTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /AllowanceTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
