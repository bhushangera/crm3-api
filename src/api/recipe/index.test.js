import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Recipe } from '.'

const app = () => express(apiRoot, routes)

let recipe

beforeEach(async () => {
  recipe = await Recipe.create({})
})

test('POST /recipe 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
})

test('GET /recipe 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /recipe/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${recipe.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(recipe.id)
})

test('GET /recipe/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /recipe/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${recipe.id}`)
    .send({ code: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(recipe.id)
  expect(body.code).toEqual('test')
})

test('PUT /recipe/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test' })
  expect(status).toBe(404)
})

test('DELETE /recipe/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${recipe.id}`)
  expect(status).toBe(204)
})

test('DELETE /recipe/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
