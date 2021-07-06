import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { LeadTrack } from '.'

const app = () => express(apiRoot, routes)

let leadTrack

beforeEach(async () => {
  leadTrack = await LeadTrack.create({})
})

test('POST /leadTrack 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ leadId: 'test', userId: 'test', trackDate: 'test', trackedBy: 'test', remarks: 'test', nextReminder: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.leadId).toEqual('test')
  expect(body.userId).toEqual('test')
  expect(body.trackDate).toEqual('test')
  expect(body.trackedBy).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.nextReminder).toEqual('test')
})

test('GET /leadTrack 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /leadTrack/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${leadTrack.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leadTrack.id)
})

test('GET /leadTrack/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /leadTrack/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${leadTrack.id}`)
    .send({ leadId: 'test', userId: 'test', trackDate: 'test', trackedBy: 'test', remarks: 'test', nextReminder: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(leadTrack.id)
  expect(body.leadId).toEqual('test')
  expect(body.userId).toEqual('test')
  expect(body.trackDate).toEqual('test')
  expect(body.trackedBy).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.nextReminder).toEqual('test')
})

test('PUT /leadTrack/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ leadId: 'test', userId: 'test', trackDate: 'test', trackedBy: 'test', remarks: 'test', nextReminder: 'test' })
  expect(status).toBe(404)
})

test('DELETE /leadTrack/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${leadTrack.id}`)
  expect(status).toBe(204)
})

test('DELETE /leadTrack/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
