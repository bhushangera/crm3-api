import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Tickets } from '.'

const app = () => express(apiRoot, routes)

let tickets

beforeEach(async () => {
  tickets = await Tickets.create({})
})

test('POST /tickets 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ ticketTypeId: 'test', ticketType: 'test', scrollNo: 'test', recordDate: 'test', creatorParty: 'test', forParty: 'test', description: 'test', closed: 'test', closedDate: 'test', poId: 'test', piId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.ticketTypeId).toEqual('test')
  expect(body.ticketType).toEqual('test')
  expect(body.scrollNo).toEqual('test')
  expect(body.recordDate).toEqual('test')
  expect(body.creatorParty).toEqual('test')
  expect(body.forParty).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.closed).toEqual('test')
  expect(body.closedDate).toEqual('test')
  expect(body.poId).toEqual('test')
  expect(body.piId).toEqual('test')
})

test('GET /tickets 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tickets/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${tickets.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tickets.id)
})

test('GET /tickets/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tickets/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${tickets.id}`)
    .send({ ticketTypeId: 'test', ticketType: 'test', scrollNo: 'test', recordDate: 'test', creatorParty: 'test', forParty: 'test', description: 'test', closed: 'test', closedDate: 'test', poId: 'test', piId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tickets.id)
  expect(body.ticketTypeId).toEqual('test')
  expect(body.ticketType).toEqual('test')
  expect(body.scrollNo).toEqual('test')
  expect(body.recordDate).toEqual('test')
  expect(body.creatorParty).toEqual('test')
  expect(body.forParty).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.closed).toEqual('test')
  expect(body.closedDate).toEqual('test')
  expect(body.poId).toEqual('test')
  expect(body.piId).toEqual('test')
})

test('PUT /tickets/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ ticketTypeId: 'test', ticketType: 'test', scrollNo: 'test', recordDate: 'test', creatorParty: 'test', forParty: 'test', description: 'test', closed: 'test', closedDate: 'test', poId: 'test', piId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tickets/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${tickets.id}`)
  expect(status).toBe(204)
})

test('DELETE /tickets/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
