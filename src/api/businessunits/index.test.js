import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Businessunits } from '.'

const app = () => express(apiRoot, routes)

let businessunits

beforeEach(async () => {
  businessunits = await Businessunits.create({})
})

test('POST /businessunits 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ companyId: 'test', companyName: 'test', unitName: 'test', shortName: 'test', building: 'test', street: 'test', address: 'test', cityId: 'test', city: 'test', stateId: 'test', state: 'test', countryId: 'test', country: 'test', pinCode: 'test', email: 'test', landline: 'test', mobile: 'test', logo: 'test', gstin: 'test', bankName: 'test', bankBranch: 'test', bankAccNumber: 'test', IFSC: 'test', MICR: 'test', active: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.companyId).toEqual('test')
  expect(body.companyName).toEqual('test')
  expect(body.unitName).toEqual('test')
  expect(body.shortName).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.street).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.cityId).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.stateId).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.countryId).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.pinCode).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.landline).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.gstin).toEqual('test')
  expect(body.bankName).toEqual('test')
  expect(body.bankBranch).toEqual('test')
  expect(body.bankAccNumber).toEqual('test')
  expect(body.IFSC).toEqual('test')
  expect(body.MICR).toEqual('test')
  expect(body.active).toEqual('test')
})

test('GET /businessunits 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /businessunits/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${businessunits.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(businessunits.id)
})

test('GET /businessunits/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /businessunits/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${businessunits.id}`)
    .send({ companyId: 'test', companyName: 'test', unitName: 'test', shortName: 'test', building: 'test', street: 'test', address: 'test', cityId: 'test', city: 'test', stateId: 'test', state: 'test', countryId: 'test', country: 'test', pinCode: 'test', email: 'test', landline: 'test', mobile: 'test', logo: 'test', gstin: 'test', bankName: 'test', bankBranch: 'test', bankAccNumber: 'test', IFSC: 'test', MICR: 'test', active: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(businessunits.id)
  expect(body.companyId).toEqual('test')
  expect(body.companyName).toEqual('test')
  expect(body.unitName).toEqual('test')
  expect(body.shortName).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.street).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.cityId).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.stateId).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.countryId).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.pinCode).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.landline).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.gstin).toEqual('test')
  expect(body.bankName).toEqual('test')
  expect(body.bankBranch).toEqual('test')
  expect(body.bankAccNumber).toEqual('test')
  expect(body.IFSC).toEqual('test')
  expect(body.MICR).toEqual('test')
  expect(body.active).toEqual('test')
})

test('PUT /businessunits/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ companyId: 'test', companyName: 'test', unitName: 'test', shortName: 'test', building: 'test', street: 'test', address: 'test', cityId: 'test', city: 'test', stateId: 'test', state: 'test', countryId: 'test', country: 'test', pinCode: 'test', email: 'test', landline: 'test', mobile: 'test', logo: 'test', gstin: 'test', bankName: 'test', bankBranch: 'test', bankAccNumber: 'test', IFSC: 'test', MICR: 'test', active: 'test' })
  expect(status).toBe(404)
})

test('DELETE /businessunits/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${businessunits.id}`)
  expect(status).toBe(204)
})

test('DELETE /businessunits/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
