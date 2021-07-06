import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Hwpack } from '.'

const app = () => express(apiRoot, routes)

let hwpack

beforeEach(async () => {
  hwpack = await Hwpack.create({})
})

test('POST /hwpack 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ articleId: 'test', hwMId: 'test', hwArticleId: 'test', hwBrandId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.articleId).toEqual('test')
  expect(body.hwMId).toEqual('test')
  expect(body.hwArticleId).toEqual('test')
  expect(body.hwBrandId).toEqual('test')
  expect(body.skuId).toEqual('test')
  expect(body.skuDNo).toEqual('test')
  expect(body.skuDName).toEqual('test')
  expect(body.skuUnit).toEqual('test')
  expect(body.skuImage).toEqual('test')
  expect(body.skuMakeImage).toEqual('test')
  expect(body.skuMake).toEqual('test')
  expect(body.skuSeries).toEqual('test')
})

test('GET /hwpack 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /hwpack/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${hwpack.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hwpack.id)
})

test('GET /hwpack/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /hwpack/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${hwpack.id}`)
    .send({ articleId: 'test', hwMId: 'test', hwArticleId: 'test', hwBrandId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hwpack.id)
  expect(body.articleId).toEqual('test')
  expect(body.hwMId).toEqual('test')
  expect(body.hwArticleId).toEqual('test')
  expect(body.hwBrandId).toEqual('test')
  expect(body.skuId).toEqual('test')
  expect(body.skuDNo).toEqual('test')
  expect(body.skuDName).toEqual('test')
  expect(body.skuUnit).toEqual('test')
  expect(body.skuImage).toEqual('test')
  expect(body.skuMakeImage).toEqual('test')
  expect(body.skuMake).toEqual('test')
  expect(body.skuSeries).toEqual('test')
})

test('PUT /hwpack/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ articleId: 'test', hwMId: 'test', hwArticleId: 'test', hwBrandId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
  expect(status).toBe(404)
})

test('DELETE /hwpack/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${hwpack.id}`)
  expect(status).toBe(204)
})

test('DELETE /hwpack/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
