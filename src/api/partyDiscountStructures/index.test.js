import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PartyDiscountStructures } from '.'

const app = () => express(apiRoot, routes)

let partyDiscountStructures

beforeEach(async () => {
  partyDiscountStructures = await PartyDiscountStructures.create({})
})

test('POST /partyDiscountStructures 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ dfId: 'test', dfDetails: 'test', fromDate: 'test', toDate: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.dfId).toEqual('test')
  expect(body.dfDetails).toEqual('test')
  expect(body.fromDate).toEqual('test')
  expect(body.toDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /partyDiscountStructures 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /partyDiscountStructures/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${partyDiscountStructures.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partyDiscountStructures.id)
})

test('GET /partyDiscountStructures/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /partyDiscountStructures/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${partyDiscountStructures.id}`)
    .send({ dfId: 'test', dfDetails: 'test', fromDate: 'test', toDate: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partyDiscountStructures.id)
  expect(body.dfId).toEqual('test')
  expect(body.dfDetails).toEqual('test')
  expect(body.fromDate).toEqual('test')
  expect(body.toDate).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /partyDiscountStructures/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ dfId: 'test', dfDetails: 'test', fromDate: 'test', toDate: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /partyDiscountStructures/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${partyDiscountStructures.id}`)
  expect(status).toBe(204)
})

test('DELETE /partyDiscountStructures/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
