import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Tcities } from '.'

const app = () => express(apiRoot, routes)

let tcities

beforeEach(async () => {
  tcities = await Tcities.create({})
})

test('POST /tcities 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ territoryId: 'test', cityId: 'test', cityName: 'test', country_id: 'test', country_name: 'test', state_id: 'test', state_name: 'test', territory_code: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.territoryId).toEqual('test')
  expect(body.cityId).toEqual('test')
  expect(body.cityName).toEqual('test')
  expect(body.country_id).toEqual('test')
  expect(body.country_name).toEqual('test')
  expect(body.state_id).toEqual('test')
  expect(body.state_name).toEqual('test')
  expect(body.territory_code).toEqual('test')
})

test('GET /tcities 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tcities/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${tcities.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tcities.id)
})

test('GET /tcities/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tcities/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${tcities.id}`)
    .send({ territoryId: 'test', cityId: 'test', cityName: 'test', country_id: 'test', country_name: 'test', state_id: 'test', state_name: 'test', territory_code: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tcities.id)
  expect(body.territoryId).toEqual('test')
  expect(body.cityId).toEqual('test')
  expect(body.cityName).toEqual('test')
  expect(body.country_id).toEqual('test')
  expect(body.country_name).toEqual('test')
  expect(body.state_id).toEqual('test')
  expect(body.state_name).toEqual('test')
  expect(body.territory_code).toEqual('test')
})

test('PUT /tcities/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ territoryId: 'test', cityId: 'test', cityName: 'test', country_id: 'test', country_name: 'test', state_id: 'test', state_name: 'test', territory_code: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tcities/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${tcities.id}`)
  expect(status).toBe(204)
})

test('DELETE /tcities/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
