import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Departments } from '.'

const app = () => express(apiRoot, routes)

let departments

beforeEach(async () => {
  departments = await Departments.create({})
})

test('POST /departments 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ companyId: 'test', company: 'test', businessUnitId: 'test', businessUnit: 'test', deptName: 'test', description: 'test', active: 'test', building: 'test', roomNo: 'test', address: 'test', cityId: 'test', city: 'test', stateId: 'test', state: 'test', countryId: 'test', country: 'test', pinCode: 'test', email: 'test', landline: 'test', extension: 'test', mobile: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.companyId).toEqual('test')
  expect(body.company).toEqual('test')
  expect(body.businessUnitId).toEqual('test')
  expect(body.businessUnit).toEqual('test')
  expect(body.deptName).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.active).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.roomNo).toEqual('test')
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
  expect(body.extension).toEqual('test')
  expect(body.mobile).toEqual('test')
})

test('GET /departments 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /departments/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${departments.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(departments.id)
})

test('GET /departments/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /departments/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${departments.id}`)
    .send({ companyId: 'test', company: 'test', businessUnitId: 'test', businessUnit: 'test', deptName: 'test', description: 'test', active: 'test', building: 'test', roomNo: 'test', address: 'test', cityId: 'test', city: 'test', stateId: 'test', state: 'test', countryId: 'test', country: 'test', pinCode: 'test', email: 'test', landline: 'test', extension: 'test', mobile: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(departments.id)
  expect(body.companyId).toEqual('test')
  expect(body.company).toEqual('test')
  expect(body.businessUnitId).toEqual('test')
  expect(body.businessUnit).toEqual('test')
  expect(body.deptName).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.active).toEqual('test')
  expect(body.building).toEqual('test')
  expect(body.roomNo).toEqual('test')
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
  expect(body.extension).toEqual('test')
  expect(body.mobile).toEqual('test')
})

test('PUT /departments/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ companyId: 'test', company: 'test', businessUnitId: 'test', businessUnit: 'test', deptName: 'test', description: 'test', active: 'test', building: 'test', roomNo: 'test', address: 'test', cityId: 'test', city: 'test', stateId: 'test', state: 'test', countryId: 'test', country: 'test', pinCode: 'test', email: 'test', landline: 'test', extension: 'test', mobile: 'test' })
  expect(status).toBe(404)
})

test('DELETE /departments/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${departments.id}`)
  expect(status).toBe(204)
})

test('DELETE /departments/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
