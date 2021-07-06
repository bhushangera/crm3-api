import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { HrPositions } from '.'

const app = () => express(apiRoot, routes)

let hrPositions

beforeEach(async () => {
  hrPositions = await HrPositions.create({})
})

test('POST /hrPositions 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ partyId: 'test', partyRoleId: 'test', jdId: 'test', jd: 'test', level: 'test', reportingDate: 'test', joiningDate: 'test', relevingDate: 'test', payGradeId: 'test', payGrade: 'test', status: 'test', temporary: 'test', permanent: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.partyId).toEqual('test')
  expect(body.partyRoleId).toEqual('test')
  expect(body.jdId).toEqual('test')
  expect(body.jd).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.reportingDate).toEqual('test')
  expect(body.joiningDate).toEqual('test')
  expect(body.relevingDate).toEqual('test')
  expect(body.payGradeId).toEqual('test')
  expect(body.payGrade).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.temporary).toEqual('test')
  expect(body.permanent).toEqual('test')
})

test('GET /hrPositions 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /hrPositions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${hrPositions.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hrPositions.id)
})

test('GET /hrPositions/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /hrPositions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${hrPositions.id}`)
    .send({ partyId: 'test', partyRoleId: 'test', jdId: 'test', jd: 'test', level: 'test', reportingDate: 'test', joiningDate: 'test', relevingDate: 'test', payGradeId: 'test', payGrade: 'test', status: 'test', temporary: 'test', permanent: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hrPositions.id)
  expect(body.partyId).toEqual('test')
  expect(body.partyRoleId).toEqual('test')
  expect(body.jdId).toEqual('test')
  expect(body.jd).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.reportingDate).toEqual('test')
  expect(body.joiningDate).toEqual('test')
  expect(body.relevingDate).toEqual('test')
  expect(body.payGradeId).toEqual('test')
  expect(body.payGrade).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.temporary).toEqual('test')
  expect(body.permanent).toEqual('test')
})

test('PUT /hrPositions/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ partyId: 'test', partyRoleId: 'test', jdId: 'test', jd: 'test', level: 'test', reportingDate: 'test', joiningDate: 'test', relevingDate: 'test', payGradeId: 'test', payGrade: 'test', status: 'test', temporary: 'test', permanent: 'test' })
  expect(status).toBe(404)
})

test('DELETE /hrPositions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${hrPositions.id}`)
  expect(status).toBe(204)
})

test('DELETE /hrPositions/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
