import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Contacts } from '.'

const app = () => express(apiRoot, routes)

let contacts

beforeEach(async () => {
  contacts = await Contacts.create({})
})

test('POST /contacts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', lastName: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.lastName).toEqual('test')
})

test('GET /contacts 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /contacts/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${contacts.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contacts.id)
})

test('GET /contacts/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /contacts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${contacts.id}`)
    .send({ name: 'test', lastName: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contacts.id)
  expect(body.name).toEqual('test')
  expect(body.lastName).toEqual('test')
})

test('PUT /contacts/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', lastName: 'test' })
  expect(status).toBe(404)
})

test('DELETE /contacts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${contacts.id}`)
  expect(status).toBe(204)
})

test('DELETE /contacts/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
