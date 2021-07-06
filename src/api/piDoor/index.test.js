import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PiDoor } from '.'

const app = () => express(apiRoot, routes)

let piDoor

beforeEach(async () => {
  piDoor = await PiDoor.create({})
})

test('POST /piDoor 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /piDoor 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /piDoor/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${piDoor.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piDoor.id)
})

test('GET /piDoor/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /piDoor/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${piDoor.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(piDoor.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /piDoor/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /piDoor/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${piDoor.id}`)
  expect(status).toBe(204)
})

test('DELETE /piDoor/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
