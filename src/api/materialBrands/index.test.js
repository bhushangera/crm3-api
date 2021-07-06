import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { MaterialBrands } from '.'

const app = () => express(apiRoot, routes)

let materialBrands

beforeEach(async () => {
  materialBrands = await MaterialBrands.create({})
})

test('POST /materialBrands 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ materialId: 'test', material: 'test', makeId: 'test', make: 'test', SMCId: 'test', MCId: 'test', MCCode: 'test', SMCCode: 'test', slug: 'test', isActive: 'test', image: 'test', mType: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.materialId).toEqual('test')
  expect(body.material).toEqual('test')
  expect(body.makeId).toEqual('test')
  expect(body.make).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.slug).toEqual('test')
  expect(body.isActive).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.mType).toEqual('test')
})

test('GET /materialBrands 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /materialBrands/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${materialBrands.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(materialBrands.id)
})

test('GET /materialBrands/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /materialBrands/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${materialBrands.id}`)
    .send({ materialId: 'test', material: 'test', makeId: 'test', make: 'test', SMCId: 'test', MCId: 'test', MCCode: 'test', SMCCode: 'test', slug: 'test', isActive: 'test', image: 'test', mType: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(materialBrands.id)
  expect(body.materialId).toEqual('test')
  expect(body.material).toEqual('test')
  expect(body.makeId).toEqual('test')
  expect(body.make).toEqual('test')
  expect(body.SMCId).toEqual('test')
  expect(body.MCId).toEqual('test')
  expect(body.MCCode).toEqual('test')
  expect(body.SMCCode).toEqual('test')
  expect(body.slug).toEqual('test')
  expect(body.isActive).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.mType).toEqual('test')
})

test('PUT /materialBrands/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ materialId: 'test', material: 'test', makeId: 'test', make: 'test', SMCId: 'test', MCId: 'test', MCCode: 'test', SMCCode: 'test', slug: 'test', isActive: 'test', image: 'test', mType: 'test' })
  expect(status).toBe(404)
})

test('DELETE /materialBrands/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${materialBrands.id}`)
  expect(status).toBe(204)
})

test('DELETE /materialBrands/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
