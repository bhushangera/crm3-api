import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Ar } from '.'

const app = () => express(apiRoot, routes)

let ar

beforeEach(async () => {
  ar = await Ar.create({})
})

test('POST /ar 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ SKUId: 'test', image: 'test', SKU: 'test', CQty: 'test', Wastage: 'test', UMOId: 'test', UOM: 'test', Qty: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.SKUId).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.SKU).toEqual('test')
  expect(body.CQty).toEqual('test')
  expect(body.Wastage).toEqual('test')
  expect(body.UMOId).toEqual('test')
  expect(body.UOM).toEqual('test')
  expect(body.Qty).toEqual('test')
})

test('GET /ar 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ar/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${ar.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ar.id)
})

test('GET /ar/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ar/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${ar.id}`)
    .send({ SKUId: 'test', image: 'test', SKU: 'test', CQty: 'test', Wastage: 'test', UMOId: 'test', UOM: 'test', Qty: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ar.id)
  expect(body.SKUId).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.SKU).toEqual('test')
  expect(body.CQty).toEqual('test')
  expect(body.Wastage).toEqual('test')
  expect(body.UMOId).toEqual('test')
  expect(body.UOM).toEqual('test')
  expect(body.Qty).toEqual('test')
})

test('PUT /ar/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ SKUId: 'test', image: 'test', SKU: 'test', CQty: 'test', Wastage: 'test', UMOId: 'test', UOM: 'test', Qty: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ar/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${ar.id}`)
  expect(status).toBe(204)
})

test('DELETE /ar/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
