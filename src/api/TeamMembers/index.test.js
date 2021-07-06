import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TeamMembers } from '.'

const app = () => express(apiRoot, routes)

let teamMembers

beforeEach(async () => {
  teamMembers = await TeamMembers.create({})
})

test('POST /TeamMembers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /TeamMembers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /TeamMembers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${teamMembers.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(teamMembers.id)
})

test('GET /TeamMembers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /TeamMembers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${teamMembers.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(teamMembers.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /TeamMembers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /TeamMembers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${teamMembers.id}`)
  expect(status).toBe(204)
})

test('DELETE /TeamMembers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
