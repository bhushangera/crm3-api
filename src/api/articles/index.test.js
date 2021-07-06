import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Articles } from '.'

const app = () => express(apiRoot, routes)

let articles

beforeEach(async () => {
  articles = await Articles.create({})
})

test('POST /articles 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ AGId: 'test', AGCode: 'test', MId: 'test', MCode: 'test', mType: 'test', MakeId: 'test', MakeCode: 'test', MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', ArticleCode: 'test', ArticleDescription: 'test', listRate: 'test', GST: 'test', slug: 'test', isPrimary: 'test', image: 'test', isActive: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.AGId).toEqual('test')
  expect(body.AGCode).toEqual('test')
  expect(body.MId).toEqual('test')
  expect(body.MCode).toEqual('test')
  expect(body.mType).toEqual('test')
  expect(body.MakeId).toEqual('test')
  expect(body.MakeCode).toEqual('test')
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.ArticleCode).toEqual('test')
  expect(body.ArticleDescription).toEqual('test')
  expect(body.listRate).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.slug).toEqual('test')
  expect(body.isPrimary).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('GET /articles 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /articles/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${articles.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articles.id)
})

test('GET /articles/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /articles/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${articles.id}`)
    .send({ AGId: 'test', AGCode: 'test', MId: 'test', MCode: 'test', mType: 'test', MakeId: 'test', MakeCode: 'test', MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', ArticleCode: 'test', ArticleDescription: 'test', listRate: 'test', GST: 'test', slug: 'test', isPrimary: 'test', image: 'test', isActive: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articles.id)
  expect(body.AGId).toEqual('test')
  expect(body.AGCode).toEqual('test')
  expect(body.MId).toEqual('test')
  expect(body.MCode).toEqual('test')
  expect(body.mType).toEqual('test')
  expect(body.MakeId).toEqual('test')
  expect(body.MakeCode).toEqual('test')
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.ArticleCode).toEqual('test')
  expect(body.ArticleDescription).toEqual('test')
  expect(body.listRate).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.slug).toEqual('test')
  expect(body.isPrimary).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('PUT /articles/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ AGId: 'test', AGCode: 'test', MId: 'test', MCode: 'test', mType: 'test', MakeId: 'test', MakeCode: 'test', MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', ArticleCode: 'test', ArticleDescription: 'test', listRate: 'test', GST: 'test', slug: 'test', isPrimary: 'test', image: 'test', isActive: 'test' })
  expect(status).toBe(404)
})

test('DELETE /articles/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${articles.id}`)
  expect(status).toBe(204)
})

test('DELETE /articles/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
