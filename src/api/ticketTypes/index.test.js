import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TicketTypes } from '.'

const app = () => express(apiRoot, routes)

let ticketTypes

beforeEach(async () => {
  ticketTypes = await TicketTypes.create({})
})

test('POST /ticketTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ ticketGroupId: 'test', ticketGroup: 'test', code: 'test', description: 'test', priority: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.ticketGroupId).toEqual('test')
  expect(body.ticketGroup).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.priority).toEqual('test')
})

test('GET /ticketTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ticketTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${ticketTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ticketTypes.id)
})

test('GET /ticketTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ticketTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${ticketTypes.id}`)
    .send({ ticketGroupId: 'test', ticketGroup: 'test', code: 'test', description: 'test', priority: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ticketTypes.id)
  expect(body.ticketGroupId).toEqual('test')
  expect(body.ticketGroup).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.priority).toEqual('test')
})

test('PUT /ticketTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ ticketGroupId: 'test', ticketGroup: 'test', code: 'test', description: 'test', priority: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ticketTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${ticketTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /ticketTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
