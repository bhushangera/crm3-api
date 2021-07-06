import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ContactGroup } from '.'

const app = () => express(apiRoot, routes)

let contactGroup

beforeEach(async () => {
  contactGroup = await ContactGroup.create({})
})

test('POST /contact-group 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /contact-group 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /contact-group/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${contactGroup.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contactGroup.id)
})

test('GET /contact-group/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /contact-group/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${contactGroup.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contactGroup.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /contact-group/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /contact-group/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${contactGroup.id}`)
  expect(status).toBe(204)
})

test('DELETE /contact-group/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
