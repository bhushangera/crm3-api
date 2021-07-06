import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { FixedAssets } from '.'

const app = () => express(apiRoot, routes)

let fixedAssets

beforeEach(async () => {
  fixedAssets = await FixedAssets.create({})
})

test('POST /fixedAssets 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ fixedAssetTypeId: 'test', fixedAssetType: 'test', assetName: 'test', dateAcquired: 'test', inWarranty: 'test', warrantyExpDate: 'test', dailyProductionCapacity: 'test', uomId: 'test', uom: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.fixedAssetTypeId).toEqual('test')
  expect(body.fixedAssetType).toEqual('test')
  expect(body.assetName).toEqual('test')
  expect(body.dateAcquired).toEqual('test')
  expect(body.inWarranty).toEqual('test')
  expect(body.warrantyExpDate).toEqual('test')
  expect(body.dailyProductionCapacity).toEqual('test')
  expect(body.uomId).toEqual('test')
  expect(body.uom).toEqual('test')
})

test('GET /fixedAssets 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /fixedAssets/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${fixedAssets.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssets.id)
})

test('GET /fixedAssets/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /fixedAssets/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${fixedAssets.id}`)
    .send({ fixedAssetTypeId: 'test', fixedAssetType: 'test', assetName: 'test', dateAcquired: 'test', inWarranty: 'test', warrantyExpDate: 'test', dailyProductionCapacity: 'test', uomId: 'test', uom: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssets.id)
  expect(body.fixedAssetTypeId).toEqual('test')
  expect(body.fixedAssetType).toEqual('test')
  expect(body.assetName).toEqual('test')
  expect(body.dateAcquired).toEqual('test')
  expect(body.inWarranty).toEqual('test')
  expect(body.warrantyExpDate).toEqual('test')
  expect(body.dailyProductionCapacity).toEqual('test')
  expect(body.uomId).toEqual('test')
  expect(body.uom).toEqual('test')
})

test('PUT /fixedAssets/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ fixedAssetTypeId: 'test', fixedAssetType: 'test', assetName: 'test', dateAcquired: 'test', inWarranty: 'test', warrantyExpDate: 'test', dailyProductionCapacity: 'test', uomId: 'test', uom: 'test' })
  expect(status).toBe(404)
})

test('DELETE /fixedAssets/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${fixedAssets.id}`)
  expect(status).toBe(204)
})

test('DELETE /fixedAssets/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
