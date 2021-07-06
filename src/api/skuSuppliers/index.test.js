import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SkuSuppliers } from '.'

const app = () => express(apiRoot, routes)

let skuSuppliers

beforeEach(async () => {
  skuSuppliers = await SkuSuppliers.create({})
})

test('POST /skuSuppliers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ SKUId: 'test', partyId: 'test', leadTime: 'test', ratingId: 'test', stars: 'test', rating: 'test', priority: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.SKUId).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.leadTime).toEqual('test')
  expect(body.ratingId).toEqual('test')
  expect(body.stars).toEqual('test')
  expect(body.rating).toEqual('test')
  expect(body.priority).toEqual('test')
})

test('GET /skuSuppliers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /skuSuppliers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${skuSuppliers.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(skuSuppliers.id)
})

test('GET /skuSuppliers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /skuSuppliers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${skuSuppliers.id}`)
    .send({ SKUId: 'test', partyId: 'test', leadTime: 'test', ratingId: 'test', stars: 'test', rating: 'test', priority: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(skuSuppliers.id)
  expect(body.SKUId).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.leadTime).toEqual('test')
  expect(body.ratingId).toEqual('test')
  expect(body.stars).toEqual('test')
  expect(body.rating).toEqual('test')
  expect(body.priority).toEqual('test')
})

test('PUT /skuSuppliers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ SKUId: 'test', partyId: 'test', leadTime: 'test', ratingId: 'test', stars: 'test', rating: 'test', priority: 'test' })
  expect(status).toBe(404)
})

test('DELETE /skuSuppliers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${skuSuppliers.id}`)
  expect(status).toBe(204)
})

test('DELETE /skuSuppliers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
