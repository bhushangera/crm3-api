import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { HealthExam } from '.'

const app = () => express(apiRoot, routes)

let healthExam

beforeEach(async () => {
  healthExam = await HealthExam.create({})
})

test('POST /healthExam 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ empId: 'test', userId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.empId).toEqual('test')
  expect(body.userId).toEqual('test')
})

test('GET /healthExam 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /healthExam/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${healthExam.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(healthExam.id)
})

test('GET /healthExam/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /healthExam/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${healthExam.id}`)
    .send({ empId: 'test', userId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(healthExam.id)
  expect(body.empId).toEqual('test')
  expect(body.userId).toEqual('test')
})

test('PUT /healthExam/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ empId: 'test', userId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /healthExam/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${healthExam.id}`)
  expect(status).toBe(204)
})

test('DELETE /healthExam/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
