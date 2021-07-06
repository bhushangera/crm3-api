import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TimeSheets } from '.'

const app = () => express(apiRoot, routes)

let timeSheets

beforeEach(async () => {
  timeSheets = await TimeSheets.create({})
})

test('POST /timeSheets 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ partyId: 'test', currentDate: 'test', month: 'test', week: 'test', day: 'test', status: 'test', in: 'test', out: 'test', CL: 'test', EL: 'test', present: 'test', absent: 'test', weeklyOff: 'test', leave: 'test', WeeklyOff: 'test', OT: 'test', OTHrs: 'test', Remarks: 'test', dutyHrs: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.partyId).toEqual('test')
  expect(body.currentDate).toEqual('test')
  expect(body.month).toEqual('test')
  expect(body.week).toEqual('test')
  expect(body.day).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.in).toEqual('test')
  expect(body.out).toEqual('test')
  expect(body.CL).toEqual('test')
  expect(body.EL).toEqual('test')
  expect(body.present).toEqual('test')
  expect(body.absent).toEqual('test')
  expect(body.weeklyOff).toEqual('test')
  expect(body.leave).toEqual('test')
  expect(body.WeeklyOff).toEqual('test')
  expect(body.OT).toEqual('test')
  expect(body.OTHrs).toEqual('test')
  expect(body.Remarks).toEqual('test')
  expect(body.dutyHrs).toEqual('test')
})

test('GET /timeSheets 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /timeSheets/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${timeSheets.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(timeSheets.id)
})

test('GET /timeSheets/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /timeSheets/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${timeSheets.id}`)
    .send({ partyId: 'test', currentDate: 'test', month: 'test', week: 'test', day: 'test', status: 'test', in: 'test', out: 'test', CL: 'test', EL: 'test', present: 'test', absent: 'test', weeklyOff: 'test', leave: 'test', WeeklyOff: 'test', OT: 'test', OTHrs: 'test', Remarks: 'test', dutyHrs: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(timeSheets.id)
  expect(body.partyId).toEqual('test')
  expect(body.currentDate).toEqual('test')
  expect(body.month).toEqual('test')
  expect(body.week).toEqual('test')
  expect(body.day).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.in).toEqual('test')
  expect(body.out).toEqual('test')
  expect(body.CL).toEqual('test')
  expect(body.EL).toEqual('test')
  expect(body.present).toEqual('test')
  expect(body.absent).toEqual('test')
  expect(body.weeklyOff).toEqual('test')
  expect(body.leave).toEqual('test')
  expect(body.WeeklyOff).toEqual('test')
  expect(body.OT).toEqual('test')
  expect(body.OTHrs).toEqual('test')
  expect(body.Remarks).toEqual('test')
  expect(body.dutyHrs).toEqual('test')
})

test('PUT /timeSheets/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ partyId: 'test', currentDate: 'test', month: 'test', week: 'test', day: 'test', status: 'test', in: 'test', out: 'test', CL: 'test', EL: 'test', present: 'test', absent: 'test', weeklyOff: 'test', leave: 'test', WeeklyOff: 'test', OT: 'test', OTHrs: 'test', Remarks: 'test', dutyHrs: 'test' })
  expect(status).toBe(404)
})

test('DELETE /timeSheets/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${timeSheets.id}`)
  expect(status).toBe(204)
})

test('DELETE /timeSheets/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
