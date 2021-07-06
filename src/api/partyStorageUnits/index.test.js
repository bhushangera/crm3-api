import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PartyStorageUnits } from '.'

const app = () => express(apiRoot, routes)

let partyStorageUnits

beforeEach(async () => {
  partyStorageUnits = await PartyStorageUnits.create({})
})

test('POST /partyStorageUnits 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ partyId: 'test', partyDetails: 'test', SUTypeId: 'test', SUTypeCode: 'test', code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.partyId).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.SUTypeId).toEqual('test')
  expect(body.SUTypeCode).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /partyStorageUnits 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /partyStorageUnits/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${partyStorageUnits.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partyStorageUnits.id)
})

test('GET /partyStorageUnits/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /partyStorageUnits/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${partyStorageUnits.id}`)
    .send({ partyId: 'test', partyDetails: 'test', SUTypeId: 'test', SUTypeCode: 'test', code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(partyStorageUnits.id)
  expect(body.partyId).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.SUTypeId).toEqual('test')
  expect(body.SUTypeCode).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /partyStorageUnits/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ partyId: 'test', partyDetails: 'test', SUTypeId: 'test', SUTypeCode: 'test', code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /partyStorageUnits/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${partyStorageUnits.id}`)
  expect(status).toBe(204)
})

test('DELETE /partyStorageUnits/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
