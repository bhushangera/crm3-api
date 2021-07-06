import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Permissions } from '.'

const app = () => express(apiRoot, routes)

let permissions

beforeEach(async () => {
  permissions = await Permissions.create({})
})

test('POST /permissions 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ title: 'test', level: 'test', parentId: 'test', isSelected: 'test', name: 'test', children: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.parentId).toEqual('test')
  expect(body.isSelected).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.children).toEqual('test')
})

test('GET /permissions 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /permissions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${permissions.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(permissions.id)
})

test('GET /permissions/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /permissions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${permissions.id}`)
    .send({ title: 'test', level: 'test', parentId: 'test', isSelected: 'test', name: 'test', children: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(permissions.id)
  expect(body.title).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.parentId).toEqual('test')
  expect(body.isSelected).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.children).toEqual('test')
})

test('PUT /permissions/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ title: 'test', level: 'test', parentId: 'test', isSelected: 'test', name: 'test', children: 'test' })
  expect(status).toBe(404)
})

test('DELETE /permissions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${permissions.id}`)
  expect(status).toBe(204)
})

test('DELETE /permissions/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
