import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SkuLocations } from '.'

const app = () => express(apiRoot, routes)

let skuLocations

beforeEach(async () => {
  skuLocations = await SkuLocations.create({})
})

test('POST /skuLocations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ SKUId: 'test', SKU: 'test', partyId: 'test', partyDetails: 'test', SUId: 'test', SUCode: 'test', SUPId: 'test', SUPCode: 'test', partitionSize: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.SKUId).toEqual('test')
  expect(body.SKU).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.SUId).toEqual('test')
  expect(body.SUCode).toEqual('test')
  expect(body.SUPId).toEqual('test')
  expect(body.SUPCode).toEqual('test')
  expect(body.partitionSize).toEqual('test')
})

test('GET /skuLocations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /skuLocations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${skuLocations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(skuLocations.id)
})

test('GET /skuLocations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /skuLocations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${skuLocations.id}`)
    .send({ SKUId: 'test', SKU: 'test', partyId: 'test', partyDetails: 'test', SUId: 'test', SUCode: 'test', SUPId: 'test', SUPCode: 'test', partitionSize: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(skuLocations.id)
  expect(body.SKUId).toEqual('test')
  expect(body.SKU).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.SUId).toEqual('test')
  expect(body.SUCode).toEqual('test')
  expect(body.SUPId).toEqual('test')
  expect(body.SUPCode).toEqual('test')
  expect(body.partitionSize).toEqual('test')
})

test('PUT /skuLocations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ SKUId: 'test', SKU: 'test', partyId: 'test', partyDetails: 'test', SUId: 'test', SUCode: 'test', SUPId: 'test', SUPCode: 'test', partitionSize: 'test' })
  expect(status).toBe(404)
})

test('DELETE /skuLocations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${skuLocations.id}`)
  expect(status).toBe(204)
})

test('DELETE /skuLocations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
