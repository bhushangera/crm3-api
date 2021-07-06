import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Enquiries } from '.'

const app = () => express(apiRoot, routes)

let enquiries

beforeEach(async () => {
  enquiries = await Enquiries.create({})
})

test('POST /enquiries 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ enqDate: 'test', userId: 'test', dpId: 'test', dealerName: 'test', dealerDetails: 'test', subject: 'test', text: 'test', status: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.enqDate).toEqual('test')
  expect(body.userId).toEqual('test')
  expect(body.dpId).toEqual('test')
  expect(body.dealerName).toEqual('test')
  expect(body.dealerDetails).toEqual('test')
  expect(body.subject).toEqual('test')
  expect(body.text).toEqual('test')
  expect(body.status).toEqual('test')
})

test('GET /enquiries 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /enquiries/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${enquiries.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(enquiries.id)
})

test('GET /enquiries/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /enquiries/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${enquiries.id}`)
    .send({ enqDate: 'test', userId: 'test', dpId: 'test', dealerName: 'test', dealerDetails: 'test', subject: 'test', text: 'test', status: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(enquiries.id)
  expect(body.enqDate).toEqual('test')
  expect(body.userId).toEqual('test')
  expect(body.dpId).toEqual('test')
  expect(body.dealerName).toEqual('test')
  expect(body.dealerDetails).toEqual('test')
  expect(body.subject).toEqual('test')
  expect(body.text).toEqual('test')
  expect(body.status).toEqual('test')
})

test('PUT /enquiries/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ enqDate: 'test', userId: 'test', dpId: 'test', dealerName: 'test', dealerDetails: 'test', subject: 'test', text: 'test', status: 'test' })
  expect(status).toBe(404)
})

test('DELETE /enquiries/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${enquiries.id}`)
  expect(status).toBe(204)
})

test('DELETE /enquiries/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
