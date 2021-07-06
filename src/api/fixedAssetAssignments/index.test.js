import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { FixedAssetAssignments } from '.'

const app = () => express(apiRoot, routes)

let fixedAssetAssignments

beforeEach(async () => {
  fixedAssetAssignments = await FixedAssetAssignments.create({})
})

test('POST /fixedAssetAssignments 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ wordEffortId: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', remarks: 'test', status: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.wordEffortId).toEqual('test')
  expect(body.fromDate).toEqual('test')
  expect(body.fromTime).toEqual('test')
  expect(body.toDate).toEqual('test')
  expect(body.toTime).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.status).toEqual('test')
})

test('GET /fixedAssetAssignments 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /fixedAssetAssignments/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${fixedAssetAssignments.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssetAssignments.id)
})

test('GET /fixedAssetAssignments/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /fixedAssetAssignments/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${fixedAssetAssignments.id}`)
    .send({ wordEffortId: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', remarks: 'test', status: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(fixedAssetAssignments.id)
  expect(body.wordEffortId).toEqual('test')
  expect(body.fromDate).toEqual('test')
  expect(body.fromTime).toEqual('test')
  expect(body.toDate).toEqual('test')
  expect(body.toTime).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.status).toEqual('test')
})

test('PUT /fixedAssetAssignments/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ wordEffortId: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', remarks: 'test', status: 'test' })
  expect(status).toBe(404)
})

test('DELETE /fixedAssetAssignments/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${fixedAssetAssignments.id}`)
  expect(status).toBe(204)
})

test('DELETE /fixedAssetAssignments/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
