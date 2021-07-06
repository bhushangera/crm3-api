import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { FixedAssetMaintenance } from '.'

const app = () => express(apiRoot, routes)

let fixedAssetMaintenance

beforeEach(async () => {
  fixedAssetMaintenance = await FixedAssetMaintenance.create({})
})

test('POST /fixedAssetMaintenance 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ recordDate: 'test', lastServiceDate: 'test', nextDueDays: 'test', serviceDueDate: 'test', sericeComments: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.recordDate).toEqual('test')
  expect(body.lastServiceDate).toEqual('test')
  expect(body.nextDueDays).toEqual('test')
  expect(body.serviceDueDate).toEqual('test')
  expect(body.sericeComments).toEqual('test')
})

test('GET /fixedAssetMaintenance 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /fixedAssetMaintenance/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${fixedAssetMaintenance.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssetMaintenance.id)
})

test('GET /fixedAssetMaintenance/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /fixedAssetMaintenance/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${fixedAssetMaintenance.id}`)
    .send({ recordDate: 'test', lastServiceDate: 'test', nextDueDays: 'test', serviceDueDate: 'test', sericeComments: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssetMaintenance.id)
  expect(body.recordDate).toEqual('test')
  expect(body.lastServiceDate).toEqual('test')
  expect(body.nextDueDays).toEqual('test')
  expect(body.serviceDueDate).toEqual('test')
  expect(body.sericeComments).toEqual('test')
})

test('PUT /fixedAssetMaintenance/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ recordDate: 'test', lastServiceDate: 'test', nextDueDays: 'test', serviceDueDate: 'test', sericeComments: 'test' })
  expect(status).toBe(404)
})

test('DELETE /fixedAssetMaintenance/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${fixedAssetMaintenance.id}`)
  expect(status).toBe(204)
})

test('DELETE /fixedAssetMaintenance/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
