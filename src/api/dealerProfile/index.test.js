import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { DealerProfile } from '.'

const app = () => express(apiRoot, routes)

let dealerProfile

beforeEach(async () => {
  dealerProfile = await DealerProfile.create({})
})

test('POST /dealerProfile 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ userId: 'test', firmName: 'test', firmType: 'test', contactPerson: 'test', designation: 'test', mobile: 'test', landline: 'test', website: 'test', businessEmail: 'test', building: 'test', street: 'test', address: 'test', city: 'test', state: 'test', country: 'test', GSTIN: 'test', bank: 'test', account: 'test', branch: 'test', branchAddress: 'test', IFSC: 'test', MICR: 'test', pinCode: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.firmName).toEqual('test')
  expect(body.firmType).toEqual('test')
  expect(body.contactPerson).toEqual('test')
  expect(body.designation).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.landline).toEqual('test')
  expect(body.website).toEqual('test')
  expect(body.businessEmail).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.street).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.GSTIN).toEqual('test')
  expect(body.bank).toEqual('test')
  expect(body.account).toEqual('test')
  expect(body.branch).toEqual('test')
  expect(body.branchAddress).toEqual('test')
  expect(body.IFSC).toEqual('test')
  expect(body.MICR).toEqual('test')
  expect(body.pinCode).toEqual('test')
})

test('GET /dealerProfile 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /dealerProfile/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${dealerProfile.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dealerProfile.id)
})

test('GET /dealerProfile/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /dealerProfile/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${dealerProfile.id}`)
    .send({ userId: 'test', firmName: 'test', firmType: 'test', contactPerson: 'test', designation: 'test', mobile: 'test', landline: 'test', website: 'test', businessEmail: 'test', building: 'test', street: 'test', address: 'test', city: 'test', state: 'test', country: 'test', GSTIN: 'test', bank: 'test', account: 'test', branch: 'test', branchAddress: 'test', IFSC: 'test', MICR: 'test', pinCode: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(dealerProfile.id)
  expect(body.userId).toEqual('test')
  expect(body.firmName).toEqual('test')
  expect(body.firmType).toEqual('test')
  expect(body.contactPerson).toEqual('test')
  expect(body.designation).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.landline).toEqual('test')
  expect(body.website).toEqual('test')
  expect(body.businessEmail).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.street).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.GSTIN).toEqual('test')
  expect(body.bank).toEqual('test')
  expect(body.account).toEqual('test')
  expect(body.branch).toEqual('test')
  expect(body.branchAddress).toEqual('test')
  expect(body.IFSC).toEqual('test')
  expect(body.MICR).toEqual('test')
  expect(body.pinCode).toEqual('test')
})

test('PUT /dealerProfile/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ userId: 'test', firmName: 'test', firmType: 'test', contactPerson: 'test', designation: 'test', mobile: 'test', landline: 'test', website: 'test', businessEmail: 'test', building: 'test', street: 'test', address: 'test', city: 'test', state: 'test', country: 'test', GSTIN: 'test', bank: 'test', account: 'test', branch: 'test', branchAddress: 'test', IFSC: 'test', MICR: 'test', pinCode: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dealerProfile/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${dealerProfile.id}`)
  expect(status).toBe(204)
})

test('DELETE /dealerProfile/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
