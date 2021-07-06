import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Channels } from '.'

const app = () => express(apiRoot, routes)

let channels

beforeEach(async () => {
  channels = await Channels.create({})
})

test('POST /channels 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ channelTypeId: 'test', makeId: 'test', description: 'test', CM: 'test', channerlName: 'test', makeName: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.channelTypeId).toEqual('test')
  expect(body.makeId).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.CM).toEqual('test')
  expect(body.channerlName).toEqual('test')
  expect(body.makeName).toEqual('test')
})

test('GET /channels 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /channels/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${channels.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(channels.id)
})

test('GET /channels/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /channels/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${channels.id}`)
    .send({ channelTypeId: 'test', makeId: 'test', description: 'test', CM: 'test', channerlName: 'test', makeName: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(channels.id)
  expect(body.channelTypeId).toEqual('test')
  expect(body.makeId).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.CM).toEqual('test')
  expect(body.channerlName).toEqual('test')
  expect(body.makeName).toEqual('test')
})

test('PUT /channels/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ channelTypeId: 'test', makeId: 'test', description: 'test', CM: 'test', channerlName: 'test', makeName: 'test' })
  expect(status).toBe(404)
})

test('DELETE /channels/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${channels.id}`)
  expect(status).toBe(204)
})

test('DELETE /channels/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
