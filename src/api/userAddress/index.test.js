import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { UserAddress } from '.'

const app = () => express(apiRoot, routes)

let userAddress

beforeEach(async () => {
  userAddress = await UserAddress.create({})
})

test('POST /userAddress 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ userId: 'test', addressType: 'test', building: 'test', street: 'test', address: 'test', pinCode: 'test', contact: 'test', city: 'test', state: 'test', country: 'test', isPrimary: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.addressType).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.street).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.pinCode).toEqual('test')
  expect(body.contact).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.isPrimary).toEqual('test')
})

test('GET /userAddress 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /userAddress/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${userAddress.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(userAddress.id)
})

test('GET /userAddress/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /userAddress/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${userAddress.id}`)
    .send({ userId: 'test', addressType: 'test', building: 'test', street: 'test', address: 'test', pinCode: 'test', contact: 'test', city: 'test', state: 'test', country: 'test', isPrimary: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(userAddress.id)
  expect(body.userId).toEqual('test')
  expect(body.addressType).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.street).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.pinCode).toEqual('test')
  expect(body.contact).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.isPrimary).toEqual('test')
})

test('PUT /userAddress/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ userId: 'test', addressType: 'test', building: 'test', street: 'test', address: 'test', pinCode: 'test', contact: 'test', city: 'test', state: 'test', country: 'test', isPrimary: 'test' })
  expect(status).toBe(404)
})

test('DELETE /userAddress/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${userAddress.id}`)
  expect(status).toBe(204)
})

test('DELETE /userAddress/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
