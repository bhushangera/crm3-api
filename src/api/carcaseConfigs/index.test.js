import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CarcaseConfigs } from '.'

const app = () => express(apiRoot, routes)

let carcaseConfigs

beforeEach(async () => {
  carcaseConfigs = await CarcaseConfigs.create({})
})

test('POST /carcaseConfigs 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ configType: 'test', FM: 'test', BM: 'test', BGS: 'test', DLA: 'test', DFM: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.configType).toEqual('test')
  expect(body.FM).toEqual('test')
  expect(body.BM).toEqual('test')
  expect(body.BGS).toEqual('test')
  expect(body.DLA).toEqual('test')
  expect(body.DFM).toEqual('test')
})

test('GET /carcaseConfigs 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /carcaseConfigs/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${carcaseConfigs.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(carcaseConfigs.id)
})

test('GET /carcaseConfigs/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /carcaseConfigs/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${carcaseConfigs.id}`)
    .send({ configType: 'test', FM: 'test', BM: 'test', BGS: 'test', DLA: 'test', DFM: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(carcaseConfigs.id)
  expect(body.configType).toEqual('test')
  expect(body.FM).toEqual('test')
  expect(body.BM).toEqual('test')
  expect(body.BGS).toEqual('test')
  expect(body.DLA).toEqual('test')
  expect(body.DFM).toEqual('test')
})

test('PUT /carcaseConfigs/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ configType: 'test', FM: 'test', BM: 'test', BGS: 'test', DLA: 'test', DFM: 'test' })
  expect(status).toBe(404)
})

test('DELETE /carcaseConfigs/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${carcaseConfigs.id}`)
  expect(status).toBe(204)
})

test('DELETE /carcaseConfigs/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
