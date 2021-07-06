import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Locations } from '.'

const app = () => express(apiRoot, routes)

let locations

beforeEach(async () => {
  locations = await Locations.create({})
})

test('POST /locations 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ territoryId: 'test', region: 'test', country: 'test', state: 'test', location: 'test', territory: 'test', pinCode: 'test', kmFromNC: 'test', kmFromHO: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.territoryId).toEqual('test')
  expect(body.region).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.territory).toEqual('test')
  expect(body.pinCode).toEqual('test')
  expect(body.kmFromNC).toEqual('test')
  expect(body.kmFromHO).toEqual('test')
})

test('GET /locations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /locations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${locations.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(locations.id)
})

test('GET /locations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /locations/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${locations.id}`)
    .send({ territoryId: 'test', region: 'test', country: 'test', state: 'test', location: 'test', territory: 'test', pinCode: 'test', kmFromNC: 'test', kmFromHO: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(locations.id)
  expect(body.territoryId).toEqual('test')
  expect(body.region).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.territory).toEqual('test')
  expect(body.pinCode).toEqual('test')
  expect(body.kmFromNC).toEqual('test')
  expect(body.kmFromHO).toEqual('test')
})

test('PUT /locations/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ territoryId: 'test', region: 'test', country: 'test', state: 'test', location: 'test', territory: 'test', pinCode: 'test', kmFromNC: 'test', kmFromHO: 'test' })
  expect(status).toBe(404)
})

test('DELETE /locations/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${locations.id}`)
  expect(status).toBe(204)
})

test('DELETE /locations/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
