import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Payroll } from '.'

const app = () => express(apiRoot, routes)

let payroll

beforeEach(async () => {
  payroll = await Payroll.create({})
})

test('POST /payroll 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ fiscalYear: 'test', month: 'test', payrollDate: 'test', totalBasic: 'test', totalEpf: 'test', totalAllowance: 'test', totalCTC: 'test', totalRecovery: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.fiscalYear).toEqual('test')
  expect(body.month).toEqual('test')
  expect(body.payrollDate).toEqual('test')
  expect(body.totalBasic).toEqual('test')
  expect(body.totalEpf).toEqual('test')
  expect(body.totalAllowance).toEqual('test')
  expect(body.totalCTC).toEqual('test')
  expect(body.totalRecovery).toEqual('test')
})

test('GET /payroll 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /payroll/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${payroll.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(payroll.id)
})

test('GET /payroll/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /payroll/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${payroll.id}`)
    .send({ fiscalYear: 'test', month: 'test', payrollDate: 'test', totalBasic: 'test', totalEpf: 'test', totalAllowance: 'test', totalCTC: 'test', totalRecovery: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(payroll.id)
  expect(body.fiscalYear).toEqual('test')
  expect(body.month).toEqual('test')
  expect(body.payrollDate).toEqual('test')
  expect(body.totalBasic).toEqual('test')
  expect(body.totalEpf).toEqual('test')
  expect(body.totalAllowance).toEqual('test')
  expect(body.totalCTC).toEqual('test')
  expect(body.totalRecovery).toEqual('test')
})

test('PUT /payroll/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ fiscalYear: 'test', month: 'test', payrollDate: 'test', totalBasic: 'test', totalEpf: 'test', totalAllowance: 'test', totalCTC: 'test', totalRecovery: 'test' })
  expect(status).toBe(404)
})

test('DELETE /payroll/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${payroll.id}`)
  expect(status).toBe(204)
})

test('DELETE /payroll/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
