import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Ag } from '.'

const app = () => express(apiRoot, routes)

let ag

beforeEach(async () => {
  ag = await Ag.create({})
})

test('POST /ag 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ MId: 'test', MCode: 'test', mType: 'test', MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', AGCode: 'test', AGDescription: 'test', image: 'test', slug: 'test', isActive: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.MId).toEqual('test')
  expect(body.MCode).toEqual('test')
  expect(body.mType).toEqual('test')
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.AGCode).toEqual('test')
  expect(body.AGDescription).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.slug).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('GET /ag 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ag/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${ag.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ag.id)
})

test('GET /ag/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ag/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${ag.id}`)
    .send({ MId: 'test', MCode: 'test', mType: 'test', MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', AGCode: 'test', AGDescription: 'test', image: 'test', slug: 'test', isActive: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ag.id)
  expect(body.MId).toEqual('test')
  expect(body.MCode).toEqual('test')
  expect(body.mType).toEqual('test')
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.AGCode).toEqual('test')
  expect(body.AGDescription).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.slug).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('PUT /ag/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ MId: 'test', MCode: 'test', mType: 'test', MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', AGCode: 'test', AGDescription: 'test', image: 'test', slug: 'test', isActive: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ag/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${ag.id}`)
  expect(status).toBe(204)
})

test('DELETE /ag/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
