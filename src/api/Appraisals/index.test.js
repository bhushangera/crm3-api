import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Appraisals } from '.'

const app = () => express(apiRoot, routes)

let appraisals

beforeEach(async () => {
  appraisals = await Appraisals.create({})
})

test('POST /Appraisals 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /Appraisals 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Appraisals/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${appraisals.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(appraisals.id)
})

test('GET /Appraisals/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Appraisals/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${appraisals.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(appraisals.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /Appraisals/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Appraisals/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${appraisals.id}`)
  expect(status).toBe(204)
})

test('DELETE /Appraisals/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
