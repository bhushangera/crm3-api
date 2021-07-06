import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Hwpackdetail } from '.'

const app = () => express(apiRoot, routes)

let hwpackdetail

beforeEach(async () => {
  hwpackdetail = await Hwpackdetail.create({})
})

test('POST /hwpackdetail 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ hwPackId: 'test', hwPackCode: 'test', hwMId: 'test', hwArticleId: 'test', hwMakeId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.hwPackId).toEqual('test')
  expect(body.hwPackCode).toEqual('test')
  expect(body.hwMId).toEqual('test')
  expect(body.hwArticleId).toEqual('test')
  expect(body.hwMakeId).toEqual('test')
  expect(body.skuId).toEqual('test')
  expect(body.skuDNo).toEqual('test')
  expect(body.skuDName).toEqual('test')
  expect(body.skuUnit).toEqual('test')
  expect(body.skuImage).toEqual('test')
  expect(body.skuMakeImage).toEqual('test')
  expect(body.skuMake).toEqual('test')
  expect(body.skuSeries).toEqual('test')
})

test('GET /hwpackdetail 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /hwpackdetail/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${hwpackdetail.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hwpackdetail.id)
})

test('GET /hwpackdetail/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /hwpackdetail/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${hwpackdetail.id}`)
    .send({ hwPackId: 'test', hwPackCode: 'test', hwMId: 'test', hwArticleId: 'test', hwMakeId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hwpackdetail.id)
  expect(body.hwPackId).toEqual('test')
  expect(body.hwPackCode).toEqual('test')
  expect(body.hwMId).toEqual('test')
  expect(body.hwArticleId).toEqual('test')
  expect(body.hwMakeId).toEqual('test')
  expect(body.skuId).toEqual('test')
  expect(body.skuDNo).toEqual('test')
  expect(body.skuDName).toEqual('test')
  expect(body.skuUnit).toEqual('test')
  expect(body.skuImage).toEqual('test')
  expect(body.skuMakeImage).toEqual('test')
  expect(body.skuMake).toEqual('test')
  expect(body.skuSeries).toEqual('test')
})

test('PUT /hwpackdetail/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ hwPackId: 'test', hwPackCode: 'test', hwMId: 'test', hwArticleId: 'test', hwMakeId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
  expect(status).toBe(404)
})

test('DELETE /hwpackdetail/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${hwpackdetail.id}`)
  expect(status).toBe(204)
})

test('DELETE /hwpackdetail/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
