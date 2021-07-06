import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CalenderDays } from '.'

const app = () => express(apiRoot, routes)

let calenderDays

beforeEach(async () => {
  calenderDays = await CalenderDays.create({})
})

test('POST /calenderDays 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ APCodeId: 'test', APCode: 'test', APStartDate: 'test', APEndDate: 'test', date: 'test', quarter: 'test', monNo: 'test', monWords: 'test', weekNo: 'test', weekDayNo: 'test', dayWords: 'test', day: 'test', holiday: 'test', remarks: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.APCodeId).toEqual('test')
  expect(body.APCode).toEqual('test')
  expect(body.APStartDate).toEqual('test')
  expect(body.APEndDate).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.quarter).toEqual('test')
  expect(body.monNo).toEqual('test')
  expect(body.monWords).toEqual('test')
  expect(body.weekNo).toEqual('test')
  expect(body.weekDayNo).toEqual('test')
  expect(body.dayWords).toEqual('test')
  expect(body.day).toEqual('test')
  expect(body.holiday).toEqual('test')
  expect(body.remarks).toEqual('test')
})

test('GET /calenderDays 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /calenderDays/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${calenderDays.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(calenderDays.id)
})

test('GET /calenderDays/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /calenderDays/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${calenderDays.id}`)
    .send({ APCodeId: 'test', APCode: 'test', APStartDate: 'test', APEndDate: 'test', date: 'test', quarter: 'test', monNo: 'test', monWords: 'test', weekNo: 'test', weekDayNo: 'test', dayWords: 'test', day: 'test', holiday: 'test', remarks: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(calenderDays.id)
  expect(body.APCodeId).toEqual('test')
  expect(body.APCode).toEqual('test')
  expect(body.APStartDate).toEqual('test')
  expect(body.APEndDate).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.quarter).toEqual('test')
  expect(body.monNo).toEqual('test')
  expect(body.monWords).toEqual('test')
  expect(body.weekNo).toEqual('test')
  expect(body.weekDayNo).toEqual('test')
  expect(body.dayWords).toEqual('test')
  expect(body.day).toEqual('test')
  expect(body.holiday).toEqual('test')
  expect(body.remarks).toEqual('test')
})

test('PUT /calenderDays/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ APCodeId: 'test', APCode: 'test', APStartDate: 'test', APEndDate: 'test', date: 'test', quarter: 'test', monNo: 'test', monWords: 'test', weekNo: 'test', weekDayNo: 'test', dayWords: 'test', day: 'test', holiday: 'test', remarks: 'test' })
  expect(status).toBe(404)
})

test('DELETE /calenderDays/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${calenderDays.id}`)
  expect(status).toBe(204)
})

test('DELETE /calenderDays/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
