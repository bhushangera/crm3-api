import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { IssueTypes } from '.'

const app = () => express(apiRoot, routes)

let issueTypes

beforeEach(async () => {
  issueTypes = await IssueTypes.create({})
})

test('POST /IssueTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /IssueTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /IssueTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${issueTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(issueTypes.id)
})

test('GET /IssueTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /IssueTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${issueTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(issueTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /IssueTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /IssueTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${issueTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /IssueTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
