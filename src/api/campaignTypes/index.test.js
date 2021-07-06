import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CampaignTypes } from '.'

const app = () => express(apiRoot, routes)

let campaignTypes

beforeEach(async () => {
  campaignTypes = await CampaignTypes.create({})
})

test('POST /campaignTypes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /campaignTypes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /campaignTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${campaignTypes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaignTypes.id)
})

test('GET /campaignTypes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /campaignTypes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${campaignTypes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaignTypes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /campaignTypes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /campaignTypes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${campaignTypes.id}`)
  expect(status).toBe(204)
})

test('DELETE /campaignTypes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
