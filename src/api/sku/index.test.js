import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Sku } from '.'

const app = () => express(apiRoot, routes)

let sku

beforeEach(async () => {
  sku = await Sku.create({})
})

test('POST /sku 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', MId: 'test', MCode: 'test', AGId: 'test', AGCode: 'test', MakeId: 'test', MakeCode: 'test', MakeImage: 'test', SKUCode: 'test', SKUDescription: 'test', image: 'test', : 'test', mType: 'test', EBSKU: 'test', EBSKUId: 'test', targetLvl: 'test', reorderLvl: 'test', reorderQty: 'test', isActive: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.MId).toEqual('test')
  expect(body.MCode).toEqual('test')
  expect(body.AGId).toEqual('test')
  expect(body.AGCode).toEqual('test')
  expect(body.MakeId).toEqual('test')
  expect(body.MakeCode).toEqual('test')
  expect(body.MakeImage).toEqual('test')
  expect(body.SKUCode).toEqual('test')
  expect(body.SKUDescription).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.).toEqual('test')
  expect(body.mType).toEqual('test')
  expect(body.EBSKU).toEqual('test')
  expect(body.EBSKUId).toEqual('test')
  expect(body.targetLvl).toEqual('test')
  expect(body.reorderLvl).toEqual('test')
  expect(body.reorderQty).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('GET /sku 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /sku/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${sku.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sku.id)
})

test('GET /sku/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /sku/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${sku.id}`)
    .send({ MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', MId: 'test', MCode: 'test', AGId: 'test', AGCode: 'test', MakeId: 'test', MakeCode: 'test', MakeImage: 'test', SKUCode: 'test', SKUDescription: 'test', image: 'test', : 'test', mType: 'test', EBSKU: 'test', EBSKUId: 'test', targetLvl: 'test', reorderLvl: 'test', reorderQty: 'test', isActive: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sku.id)
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.MId).toEqual('test')
  expect(body.MCode).toEqual('test')
  expect(body.AGId).toEqual('test')
  expect(body.AGCode).toEqual('test')
  expect(body.MakeId).toEqual('test')
  expect(body.MakeCode).toEqual('test')
  expect(body.MakeImage).toEqual('test')
  expect(body.SKUCode).toEqual('test')
  expect(body.SKUDescription).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.).toEqual('test')
  expect(body.mType).toEqual('test')
  expect(body.EBSKU).toEqual('test')
  expect(body.EBSKUId).toEqual('test')
  expect(body.targetLvl).toEqual('test')
  expect(body.reorderLvl).toEqual('test')
  expect(body.reorderQty).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('PUT /sku/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', MId: 'test', MCode: 'test', AGId: 'test', AGCode: 'test', MakeId: 'test', MakeCode: 'test', MakeImage: 'test', SKUCode: 'test', SKUDescription: 'test', image: 'test', : 'test', mType: 'test', EBSKU: 'test', EBSKUId: 'test', targetLvl: 'test', reorderLvl: 'test', reorderQty: 'test', isActive: 'test' })
  expect(status).toBe(404)
})

test('DELETE /sku/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${sku.id}`)
  expect(status).toBe(204)
})

test('DELETE /sku/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
