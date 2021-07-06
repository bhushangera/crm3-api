import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { SendMail } from '.'

const app = () => express(apiRoot, routes)

let sendMail

beforeEach(async () => {
  sendMail = await SendMail.create({})
})

test('POST /sendMail 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ mailDate: 'test', from: 'test', senderId: 'test', to: 'test', receiverId: 'test', subject: 'test', body: 'test', deleted: 'test', read: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.mailDate).toEqual('test')
  expect(body.from).toEqual('test')
  expect(body.senderId).toEqual('test')
  expect(body.to).toEqual('test')
  expect(body.receiverId).toEqual('test')
  expect(body.subject).toEqual('test')
  expect(body.body).toEqual('test')
  expect(body.deleted).toEqual('test')
  expect(body.read).toEqual('test')
})

test('GET /sendMail 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /sendMail/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${sendMail.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sendMail.id)
})

test('GET /sendMail/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /sendMail/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${sendMail.id}`)
    .send({ mailDate: 'test', from: 'test', senderId: 'test', to: 'test', receiverId: 'test', subject: 'test', body: 'test', deleted: 'test', read: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sendMail.id)
  expect(body.mailDate).toEqual('test')
  expect(body.from).toEqual('test')
  expect(body.senderId).toEqual('test')
  expect(body.to).toEqual('test')
  expect(body.receiverId).toEqual('test')
  expect(body.subject).toEqual('test')
  expect(body.body).toEqual('test')
  expect(body.deleted).toEqual('test')
  expect(body.read).toEqual('test')
})

test('PUT /sendMail/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ mailDate: 'test', from: 'test', senderId: 'test', to: 'test', receiverId: 'test', subject: 'test', body: 'test', deleted: 'test', read: 'test' })
  expect(status).toBe(404)
})

test('DELETE /sendMail/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${sendMail.id}`)
  expect(status).toBe(204)
})

test('DELETE /sendMail/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
