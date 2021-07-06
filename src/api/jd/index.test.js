import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Jd } from '.'

const app = () => express(apiRoot, routes)

let jd

beforeEach(async () => {
  jd = await Jd.create({})
})

test('POST /jd 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ jd: 'test', level: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.jd).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /jd 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /jd/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${jd.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(jd.id)
})

test('GET /jd/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /jd/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${jd.id}`)
    .send({ jd: 'test', level: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(jd.id)
  expect(body.jd).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /jd/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ jd: 'test', level: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /jd/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${jd.id}`)
  expect(status).toBe(204)
})

test('DELETE /jd/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
