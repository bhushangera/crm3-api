import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CampaignStatusCodes } from '.'

const app = () => express(apiRoot, routes)

let campaignStatusCodes

beforeEach(async () => {
  campaignStatusCodes = await CampaignStatusCodes.create({})
})

test('POST /CampaignStatusCodes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /CampaignStatusCodes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /CampaignStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${campaignStatusCodes.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaignStatusCodes.id)
})

test('GET /CampaignStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /CampaignStatusCodes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${campaignStatusCodes.id}`)
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaignStatusCodes.id)
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /CampaignStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ code: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /CampaignStatusCodes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${campaignStatusCodes.id}`)
  expect(status).toBe(204)
})

test('DELETE /CampaignStatusCodes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
