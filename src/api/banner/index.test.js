import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Banner } from '.'

const app = () => express(apiRoot, routes)

let banner

beforeEach(async () => {
  banner = await Banner.create({})
})

test('POST /banner 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ image: 'test', text1: 'test', text2: 'test', btnLink: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.image).toEqual('test')
  expect(body.text1).toEqual('test')
  expect(body.text2).toEqual('test')
  expect(body.btnLink).toEqual('test')
})

test('GET /banner 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /banner/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${banner.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(banner.id)
})

test('GET /banner/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /banner/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${banner.id}`)
    .send({ image: 'test', text1: 'test', text2: 'test', btnLink: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(banner.id)
  expect(body.image).toEqual('test')
  expect(body.text1).toEqual('test')
  expect(body.text2).toEqual('test')
  expect(body.btnLink).toEqual('test')
})

test('PUT /banner/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ image: 'test', text1: 'test', text2: 'test', btnLink: 'test' })
  expect(status).toBe(404)
})

test('DELETE /banner/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${banner.id}`)
  expect(status).toBe(204)
})

test('DELETE /banner/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
