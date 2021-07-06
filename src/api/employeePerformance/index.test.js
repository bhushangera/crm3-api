import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { EmployeePerformance } from '.'

const app = () => express(apiRoot, routes)

let employeePerformance

beforeEach(async () => {
  employeePerformance = await EmployeePerformance.create({})
})

test('POST /employeePerformance 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ partyId: 'test', partyName: 'test', managerId: 'test', managerName: 'test', approoved: 'test', approovedBy: 'test', fiscalYear: 'test', presents: 'test', leaves: 'test', : 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.partyId).toEqual('test')
  expect(body.partyName).toEqual('test')
  expect(body.managerId).toEqual('test')
  expect(body.managerName).toEqual('test')
  expect(body.approoved).toEqual('test')
  expect(body.approovedBy).toEqual('test')
  expect(body.fiscalYear).toEqual('test')
  expect(body.presents).toEqual('test')
  expect(body.leaves).toEqual('test')
  expect(body.).toEqual('test')
})

test('GET /employeePerformance 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /employeePerformance/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${employeePerformance.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(employeePerformance.id)
})

test('GET /employeePerformance/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /employeePerformance/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${employeePerformance.id}`)
    .send({ partyId: 'test', partyName: 'test', managerId: 'test', managerName: 'test', approoved: 'test', approovedBy: 'test', fiscalYear: 'test', presents: 'test', leaves: 'test', : 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(employeePerformance.id)
  expect(body.partyId).toEqual('test')
  expect(body.partyName).toEqual('test')
  expect(body.managerId).toEqual('test')
  expect(body.managerName).toEqual('test')
  expect(body.approoved).toEqual('test')
  expect(body.approovedBy).toEqual('test')
  expect(body.fiscalYear).toEqual('test')
  expect(body.presents).toEqual('test')
  expect(body.leaves).toEqual('test')
  expect(body.).toEqual('test')
})

test('PUT /employeePerformance/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ partyId: 'test', partyName: 'test', managerId: 'test', managerName: 'test', approoved: 'test', approovedBy: 'test', fiscalYear: 'test', presents: 'test', leaves: 'test', : 'test' })
  expect(status).toBe(404)
})

test('DELETE /employeePerformance/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${employeePerformance.id}`)
  expect(status).toBe(204)
})

test('DELETE /employeePerformance/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
