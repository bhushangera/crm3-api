import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Pars } from '.'

const app = () => express(apiRoot, routes)

let pars

beforeEach(async () => {
  pars = await Pars.create({})
})

test('POST /pars 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ PartyId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.PartyId).toEqual('test')
})

test('GET /pars 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /pars/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${pars.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pars.id)
})

test('GET /pars/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /pars/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${pars.id}`)
    .send({ PartyId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pars.id)
  expect(body.PartyId).toEqual('test')
})

test('PUT /pars/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ PartyId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /pars/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${pars.id}`)
  expect(status).toBe(204)
})

test('DELETE /pars/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
