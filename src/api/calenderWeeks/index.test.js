import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CalenderWeeks } from '.'

const app = () => express(apiRoot, routes)

let calenderWeeks

beforeEach(async () => {
  calenderWeeks = await CalenderWeeks.create({})
})

test('POST /calenderWeeks 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ weekNo: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.weekNo).toEqual('test')
  expect(body.startDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /calenderWeeks 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /calenderWeeks/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${calenderWeeks.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(calenderWeeks.id)
})

test('GET /calenderWeeks/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /calenderWeeks/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${calenderWeeks.id}`)
    .send({ weekNo: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(calenderWeeks.id)
  expect(body.weekNo).toEqual('test')
  expect(body.startDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /calenderWeeks/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ weekNo: 'test', startDate: 'test', endDate: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /calenderWeeks/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${calenderWeeks.id}`)
  expect(status).toBe(204)
})

test('DELETE /calenderWeeks/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
