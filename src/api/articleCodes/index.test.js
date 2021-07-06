import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ArticleCodes } from '.'

const app = () => express(apiRoot, routes)

let articleCodes

beforeEach(async () => {
  articleCodes = await ArticleCodes.create({})
})

test('POST /articleCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ seriesArticleId: 'test', articleCode: 'test', articleNo: 'test', image: 'test', isActive: 'test', slug: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.seriesArticleId).toEqual('test')
  expect(body.articleCode).toEqual('test')
  expect(body.articleNo).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isActive).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('GET /articleCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /articleCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${articleCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articleCodes.id)
})

test('GET /articleCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /articleCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${articleCodes.id}`)
    .send({ seriesArticleId: 'test', articleCode: 'test', articleNo: 'test', image: 'test', isActive: 'test', slug: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articleCodes.id)
  expect(body.seriesArticleId).toEqual('test')
  expect(body.articleCode).toEqual('test')
  expect(body.articleNo).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isActive).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('PUT /articleCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ seriesArticleId: 'test', articleCode: 'test', articleNo: 'test', image: 'test', isActive: 'test', slug: 'test' })
  expect(status).toBe(404)
})

test('DELETE /articleCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${articleCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /articleCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
