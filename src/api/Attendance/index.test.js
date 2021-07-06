import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Attendance } from '.'

const app = () => express(apiRoot, routes)

let attendance

beforeEach(async () => {
  attendance = await Attendance.create({})
})

test('POST /Attendance 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Attendance 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Attendance/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${attendance.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(attendance.id)
})

test('GET /Attendance/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Attendance/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${attendance.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(attendance.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Attendance/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Attendance/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${attendance.id}`)
  expect(status).toBe(204)
})

test('DELETE /Attendance/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
