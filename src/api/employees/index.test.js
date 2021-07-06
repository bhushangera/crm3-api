import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Employees } from '.'

const app = () => express(apiRoot, routes)

let employees

beforeEach(async () => {
  employees = await Employees.create({})
})

test('POST /employees 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ userId: 'test', title: 'test', name: 'test', lastname: 'test', email: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.lastname).toEqual('test')
  expect(body.email).toEqual('test')
})

test('GET /employees 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /employees/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${employees.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(employees.id)
})

test('GET /employees/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /employees/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${employees.id}`)
    .send({ userId: 'test', title: 'test', name: 'test', lastname: 'test', email: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(employees.id)
  expect(body.userId).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.lastname).toEqual('test')
  expect(body.email).toEqual('test')
})

test('PUT /employees/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ userId: 'test', title: 'test', name: 'test', lastname: 'test', email: 'test' })
  expect(status).toBe(404)
})

test('DELETE /employees/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${employees.id}`)
  expect(status).toBe(204)
})

test('DELETE /employees/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
