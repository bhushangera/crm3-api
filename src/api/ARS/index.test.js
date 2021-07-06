import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Ars } from '.'

const app = () => express(apiRoot, routes)

let ars

beforeEach(async () => {
  ars = await Ars.create({})
})

test('POST /ARS 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ ARSCode: 'test', ARSDescription: 'test', ArticleId: 'test', MCCode: 'test', SMCCode: 'test', ArticleCode: 'test', ArticleDescription: 'test', BMId: 'test', BMCode.BMDescription: 'test', BMakeId: 'test', BMakeCode: 'test', BMakeImage: 'test', FMId: 'test', FMCode: 'test', FMDescription: 'test', FMakeId: 'test', FMakeImage: 'test', FMakeCode: 'test', FArticleId: 'test', FArticleCode: 'test', FArticleDescription: 'test', STDBack: 'test', VisibleBack: 'test', VBAddition: 'test', RATE: 'test', GST: 'test', slug: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.ARSCode).toEqual('test')
  expect(body.ARSDescription).toEqual('test')
  expect(body.ArticleId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.ArticleCode).toEqual('test')
  expect(body.ArticleDescription).toEqual('test')
  expect(body.BMId).toEqual('test')
  expect(body.BMCode.BMDescription).toEqual('test')
  expect(body.BMakeId).toEqual('test')
  expect(body.BMakeCode).toEqual('test')
  expect(body.BMakeImage).toEqual('test')
  expect(body.FMId).toEqual('test')
  expect(body.FMCode).toEqual('test')
  expect(body.FMDescription).toEqual('test')
  expect(body.FMakeId).toEqual('test')
  expect(body.FMakeImage).toEqual('test')
  expect(body.FMakeCode).toEqual('test')
  expect(body.FArticleId).toEqual('test')
  expect(body.FArticleCode).toEqual('test')
  expect(body.FArticleDescription).toEqual('test')
  expect(body.STDBack).toEqual('test')
  expect(body.VisibleBack).toEqual('test')
  expect(body.VBAddition).toEqual('test')
  expect(body.RATE).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('GET /ARS 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ARS/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${ars.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ars.id)
})

test('GET /ARS/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ARS/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${ars.id}`)
    .send({ ARSCode: 'test', ARSDescription: 'test', ArticleId: 'test', MCCode: 'test', SMCCode: 'test', ArticleCode: 'test', ArticleDescription: 'test', BMId: 'test', BMCode.BMDescription: 'test', BMakeId: 'test', BMakeCode: 'test', BMakeImage: 'test', FMId: 'test', FMCode: 'test', FMDescription: 'test', FMakeId: 'test', FMakeImage: 'test', FMakeCode: 'test', FArticleId: 'test', FArticleCode: 'test', FArticleDescription: 'test', STDBack: 'test', VisibleBack: 'test', VBAddition: 'test', RATE: 'test', GST: 'test', slug: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ars.id)
  expect(body.ARSCode).toEqual('test')
  expect(body.ARSDescription).toEqual('test')
  expect(body.ArticleId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.ArticleCode).toEqual('test')
  expect(body.ArticleDescription).toEqual('test')
  expect(body.BMId).toEqual('test')
  expect(body.BMCode.BMDescription).toEqual('test')
  expect(body.BMakeId).toEqual('test')
  expect(body.BMakeCode).toEqual('test')
  expect(body.BMakeImage).toEqual('test')
  expect(body.FMId).toEqual('test')
  expect(body.FMCode).toEqual('test')
  expect(body.FMDescription).toEqual('test')
  expect(body.FMakeId).toEqual('test')
  expect(body.FMakeImage).toEqual('test')
  expect(body.FMakeCode).toEqual('test')
  expect(body.FArticleId).toEqual('test')
  expect(body.FArticleCode).toEqual('test')
  expect(body.FArticleDescription).toEqual('test')
  expect(body.STDBack).toEqual('test')
  expect(body.VisibleBack).toEqual('test')
  expect(body.VBAddition).toEqual('test')
  expect(body.RATE).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.slug).toEqual('test')
})

test('PUT /ARS/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ ARSCode: 'test', ARSDescription: 'test', ArticleId: 'test', MCCode: 'test', SMCCode: 'test', ArticleCode: 'test', ArticleDescription: 'test', BMId: 'test', BMCode.BMDescription: 'test', BMakeId: 'test', BMakeCode: 'test', BMakeImage: 'test', FMId: 'test', FMCode: 'test', FMDescription: 'test', FMakeId: 'test', FMakeImage: 'test', FMakeCode: 'test', FArticleId: 'test', FArticleCode: 'test', FArticleDescription: 'test', STDBack: 'test', VisibleBack: 'test', VBAddition: 'test', RATE: 'test', GST: 'test', slug: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ARS/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${ars.id}`)
  expect(status).toBe(204)
})

test('DELETE /ARS/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
