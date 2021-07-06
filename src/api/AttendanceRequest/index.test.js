import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { AttendanceRequest } from '.'

const app = () => express(apiRoot, routes)

let attendanceRequest

beforeEach(async () => {
  attendanceRequest = await AttendanceRequest.create({})
})

test('POST /AttendanceRequest 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /AttendanceRequest 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /AttendanceRequest/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${attendanceRequest.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(attendanceRequest.id)
})

test('GET /AttendanceRequest/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /AttendanceRequest/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${attendanceRequest.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(attendanceRequest.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /AttendanceRequest/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /AttendanceRequest/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${attendanceRequest.id}`)
  expect(status).toBe(204)
})

test('DELETE /AttendanceRequest/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
