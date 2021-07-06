import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Account } from '.'

const app = () => express(apiRoot, routes)

let account

beforeEach(async () => {
  account = await Account.create({})
})

test('POST /account 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ accountTypeId: 'test', accountType: 'test', code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.accountTypeId).toEqual('test')
  expect(body.accountType).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /account 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /account/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${account.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(account.id)
})

test('GET /account/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /account/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${account.id}`)
    .send({ accountTypeId: 'test', accountType: 'test', code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(account.id)
  expect(body.accountTypeId).toEqual('test')
  expect(body.accountType).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /account/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ accountTypeId: 'test', accountType: 'test', code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /account/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${account.id}`)
  expect(status).toBe(204)
})

test('DELETE /account/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
