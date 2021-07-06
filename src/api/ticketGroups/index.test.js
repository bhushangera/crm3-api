import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TicketGroups } from '.'

const app = () => express(apiRoot, routes)

let ticketGroups

beforeEach(async () => {
  ticketGroups = await TicketGroups.create({})
})

test('POST /ticketGroups 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ prefix: 'test', group: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.prefix).toEqual('test')
  expect(body.group).toEqual('test')
})

test('GET /ticketGroups 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ticketGroups/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${ticketGroups.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ticketGroups.id)
})

test('GET /ticketGroups/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ticketGroups/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${ticketGroups.id}`)
    .send({ prefix: 'test', group: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ticketGroups.id)
  expect(body.prefix).toEqual('test')
  expect(body.group).toEqual('test')
})

test('PUT /ticketGroups/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ prefix: 'test', group: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ticketGroups/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${ticketGroups.id}`)
  expect(status).toBe(204)
})

test('DELETE /ticketGroups/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
