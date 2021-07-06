import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PayGrades } from '.'

const app = () => express(apiRoot, routes)

let payGrades

beforeEach(async () => {
  payGrades = await PayGrades.create({})
})

test('POST /payGrades 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ grade: 'test', annualIncrement: 'test', scale: 'test', HRA: 'test', DA: 'test', SA: 'test', LTA: 'test', ESI: 'test', EPFEmployee: 'test', EPFEmployer: 'test', DutyHours: 'test', Gratuity5yrs: 'test', Gratuity10yrs: 'test', OTA: 'test', CL: 'test', ELConversionFactor: 'test', ML: 'test', maternityLeave: 'test', RH: 'test', Days: 'test', weeklyOff: 'test', offAmount: 'test', RateHour: 'test', RateDay: 'test', weeklyHours: 'test', monthlyHours: 'test', FestiveBonus: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.grade).toEqual('test')
  expect(body.annualIncrement).toEqual('test')
  expect(body.scale).toEqual('test')
  expect(body.HRA).toEqual('test')
  expect(body.DA).toEqual('test')
  expect(body.SA).toEqual('test')
  expect(body.LTA).toEqual('test')
  expect(body.ESI).toEqual('test')
  expect(body.EPFEmployee).toEqual('test')
  expect(body.EPFEmployer).toEqual('test')
  expect(body.DutyHours).toEqual('test')
  expect(body.Gratuity5yrs).toEqual('test')
  expect(body.Gratuity10yrs).toEqual('test')
  expect(body.OTA).toEqual('test')
  expect(body.CL).toEqual('test')
  expect(body.ELConversionFactor).toEqual('test')
  expect(body.ML).toEqual('test')
  expect(body.maternityLeave).toEqual('test')
  expect(body.RH).toEqual('test')
  expect(body.Days).toEqual('test')
  expect(body.weeklyOff).toEqual('test')
  expect(body.offAmount).toEqual('test')
  expect(body.RateHour).toEqual('test')
  expect(body.RateDay).toEqual('test')
  expect(body.weeklyHours).toEqual('test')
  expect(body.monthlyHours).toEqual('test')
  expect(body.FestiveBonus).toEqual('test')
})

test('GET /payGrades 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /payGrades/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${payGrades.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(payGrades.id)
})

test('GET /payGrades/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /payGrades/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${payGrades.id}`)
    .send({ grade: 'test', annualIncrement: 'test', scale: 'test', HRA: 'test', DA: 'test', SA: 'test', LTA: 'test', ESI: 'test', EPFEmployee: 'test', EPFEmployer: 'test', DutyHours: 'test', Gratuity5yrs: 'test', Gratuity10yrs: 'test', OTA: 'test', CL: 'test', ELConversionFactor: 'test', ML: 'test', maternityLeave: 'test', RH: 'test', Days: 'test', weeklyOff: 'test', offAmount: 'test', RateHour: 'test', RateDay: 'test', weeklyHours: 'test', monthlyHours: 'test', FestiveBonus: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(payGrades.id)
  expect(body.grade).toEqual('test')
  expect(body.annualIncrement).toEqual('test')
  expect(body.scale).toEqual('test')
  expect(body.HRA).toEqual('test')
  expect(body.DA).toEqual('test')
  expect(body.SA).toEqual('test')
  expect(body.LTA).toEqual('test')
  expect(body.ESI).toEqual('test')
  expect(body.EPFEmployee).toEqual('test')
  expect(body.EPFEmployer).toEqual('test')
  expect(body.DutyHours).toEqual('test')
  expect(body.Gratuity5yrs).toEqual('test')
  expect(body.Gratuity10yrs).toEqual('test')
  expect(body.OTA).toEqual('test')
  expect(body.CL).toEqual('test')
  expect(body.ELConversionFactor).toEqual('test')
  expect(body.ML).toEqual('test')
  expect(body.maternityLeave).toEqual('test')
  expect(body.RH).toEqual('test')
  expect(body.Days).toEqual('test')
  expect(body.weeklyOff).toEqual('test')
  expect(body.offAmount).toEqual('test')
  expect(body.RateHour).toEqual('test')
  expect(body.RateDay).toEqual('test')
  expect(body.weeklyHours).toEqual('test')
  expect(body.monthlyHours).toEqual('test')
  expect(body.FestiveBonus).toEqual('test')
})

test('PUT /payGrades/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ grade: 'test', annualIncrement: 'test', scale: 'test', HRA: 'test', DA: 'test', SA: 'test', LTA: 'test', ESI: 'test', EPFEmployee: 'test', EPFEmployer: 'test', DutyHours: 'test', Gratuity5yrs: 'test', Gratuity10yrs: 'test', OTA: 'test', CL: 'test', ELConversionFactor: 'test', ML: 'test', maternityLeave: 'test', RH: 'test', Days: 'test', weeklyOff: 'test', offAmount: 'test', RateHour: 'test', RateDay: 'test', weeklyHours: 'test', monthlyHours: 'test', FestiveBonus: 'test' })
  expect(status).toBe(404)
})

test('DELETE /payGrades/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${payGrades.id}`)
  expect(status).toBe(204)
})

test('DELETE /payGrades/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
