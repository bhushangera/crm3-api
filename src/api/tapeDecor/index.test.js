import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TapeDecor } from '.'

const app = () => express(apiRoot, routes)

let tapeDecor

beforeEach(async () => {
  tapeDecor = await TapeDecor.create({})
})

test('POST /tapeDecors 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ dNo: 'test', dName: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.dNo).toEqual('test')
  expect(body.dName).toEqual('test')
})

test('GET /tapeDecors 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tapeDecors/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${tapeDecor.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tapeDecor.id)
})

test('GET /tapeDecors/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tapeDecors/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${tapeDecor.id}`)
    .send({ dNo: 'test', dName: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tapeDecor.id)
  expect(body.dNo).toEqual('test')
  expect(body.dName).toEqual('test')
})

test('PUT /tapeDecors/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ dNo: 'test', dName: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tapeDecors/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${tapeDecor.id}`)
  expect(status).toBe(204)
})

test('DELETE /tapeDecors/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
