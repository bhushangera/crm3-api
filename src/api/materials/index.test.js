import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Materials } from '.'

const app = () => express(apiRoot, routes)

let materials

beforeEach(async () => {
  materials = await Materials.create({})
})

test('POST /materials 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ materialCode: 'test', description: 'test', isBaseMaterial: 'test', isFinishingMaterial: 'test', isActive: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.materialCode).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.isBaseMaterial).toEqual('test')
  expect(body.isFinishingMaterial).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('GET /materials 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /materials/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${materials.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(materials.id)
})

test('GET /materials/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /materials/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${materials.id}`)
    .send({ materialCode: 'test', description: 'test', isBaseMaterial: 'test', isFinishingMaterial: 'test', isActive: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(materials.id)
  expect(body.materialCode).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.isBaseMaterial).toEqual('test')
  expect(body.isFinishingMaterial).toEqual('test')
  expect(body.isActive).toEqual('test')
})

test('PUT /materials/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ materialCode: 'test', description: 'test', isBaseMaterial: 'test', isFinishingMaterial: 'test', isActive: 'test' })
  expect(status).toBe(404)
})

test('DELETE /materials/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${materials.id}`)
  expect(status).toBe(204)
})

test('DELETE /materials/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
