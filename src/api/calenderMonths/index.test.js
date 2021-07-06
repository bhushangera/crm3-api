import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CalenderMonths } from '.'

const app = () => express(apiRoot, routes)

let calenderMonths

beforeEach(async () => {
  calenderMonths = await CalenderMonths.create({})
})

test('POST /calenderMonths 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ mNo: 'test', mWords: 'test', mdays: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.mNo).toEqual('test')
  expect(body.mWords).toEqual('test')
  expect(body.mdays).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /calenderMonths 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /calenderMonths/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${calenderMonths.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(calenderMonths.id)
})

test('GET /calenderMonths/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /calenderMonths/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${calenderMonths.id}`)
    .send({ mNo: 'test', mWords: 'test', mdays: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(calenderMonths.id)
  expect(body.mNo).toEqual('test')
  expect(body.mWords).toEqual('test')
  expect(body.mdays).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /calenderMonths/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ mNo: 'test', mWords: 'test', mdays: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /calenderMonths/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${calenderMonths.id}`)
  expect(status).toBe(204)
})

test('DELETE /calenderMonths/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
