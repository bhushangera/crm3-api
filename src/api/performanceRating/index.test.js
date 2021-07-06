import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PerformanceRating } from '.'

const app = () => express(apiRoot, routes)

let performanceRating

beforeEach(async () => {
  performanceRating = await PerformanceRating.create({})
})

test('POST /performanceRatings 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ stars: 'test', rating: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.stars).toEqual('test')
  expect(body.rating).toEqual('test')
})

test('GET /performanceRatings 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /performanceRatings/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${performanceRating.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(performanceRating.id)
})

test('GET /performanceRatings/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /performanceRatings/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${performanceRating.id}`)
    .send({ stars: 'test', rating: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(performanceRating.id)
  expect(body.stars).toEqual('test')
  expect(body.rating).toEqual('test')
})

test('PUT /performanceRatings/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ stars: 'test', rating: 'test' })
  expect(status).toBe(404)
})

test('DELETE /performanceRatings/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${performanceRating.id}`)
  expect(status).toBe(204)
})

test('DELETE /performanceRatings/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
