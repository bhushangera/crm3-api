import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiCivil } from '.'

const app = () => express(apiRoot, routes)

let piCivil

beforeEach(async () => {
  piCivil = await PiCivil.create({})
})

test('POST /piCivil 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /piCivil 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /piCivil/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piCivil.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piCivil.id)
})

test('GET /piCivil/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /piCivil/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piCivil.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piCivil.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /piCivil/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /piCivil/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piCivil.id}`)
  expect(status).toBe(204)
})

test('DELETE /piCivil/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
