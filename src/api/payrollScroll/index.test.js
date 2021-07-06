import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PayrollScroll } from '.'

const app = () => express(apiRoot, routes)

let payrollScroll

beforeEach(async () => {
  payrollScroll = await PayrollScroll.create({})
})

test('POST /payrollScroll 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ scrollNo: 'test', partyId: 'test', payGradeId: 'test', payGrade: 'test', partyDetails: 'test', department: 'test', PresentDays: 'test', PaidDays: 'test', CL: 'test', EL: 'test', totaHrsAllowed: 'test', dutyHrs: 'test', weeklyOff: 'test', otHours: 'test', totalIncrements: 'test', IncrementAmount: 'test', scale: 'test', HRADeduction: 'test', HRA: 'test', DA: 'test', SA: 'test', OTA: 'test', EPFEmployee: 'test', EPFEmployer: 'test', loanRecovery: 'test', CTC: 'test', totalDeduction: 'test', netInHand: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.scrollNo).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.payGradeId).toEqual('test')
  expect(body.payGrade).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.PresentDays).toEqual('test')
  expect(body.PaidDays).toEqual('test')
  expect(body.CL).toEqual('test')
  expect(body.EL).toEqual('test')
  expect(body.totaHrsAllowed).toEqual('test')
  expect(body.dutyHrs).toEqual('test')
  expect(body.weeklyOff).toEqual('test')
  expect(body.otHours).toEqual('test')
  expect(body.totalIncrements).toEqual('test')
  expect(body.IncrementAmount).toEqual('test')
  expect(body.scale).toEqual('test')
  expect(body.HRADeduction).toEqual('test')
  expect(body.HRA).toEqual('test')
  expect(body.DA).toEqual('test')
  expect(body.SA).toEqual('test')
  expect(body.OTA).toEqual('test')
  expect(body.EPFEmployee).toEqual('test')
  expect(body.EPFEmployer).toEqual('test')
  expect(body.loanRecovery).toEqual('test')
  expect(body.CTC).toEqual('test')
  expect(body.totalDeduction).toEqual('test')
  expect(body.netInHand).toEqual('test')
})

test('GET /payrollScroll 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /payrollScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${payrollScroll.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(payrollScroll.id)
})

test('GET /payrollScroll/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /payrollScroll/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${payrollScroll.id}`)
    .send({ scrollNo: 'test', partyId: 'test', payGradeId: 'test', payGrade: 'test', partyDetails: 'test', department: 'test', PresentDays: 'test', PaidDays: 'test', CL: 'test', EL: 'test', totaHrsAllowed: 'test', dutyHrs: 'test', weeklyOff: 'test', otHours: 'test', totalIncrements: 'test', IncrementAmount: 'test', scale: 'test', HRADeduction: 'test', HRA: 'test', DA: 'test', SA: 'test', OTA: 'test', EPFEmployee: 'test', EPFEmployer: 'test', loanRecovery: 'test', CTC: 'test', totalDeduction: 'test', netInHand: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(payrollScroll.id)
  expect(body.scrollNo).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.payGradeId).toEqual('test')
  expect(body.payGrade).toEqual('test')
  expect(body.partyDetails).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.PresentDays).toEqual('test')
  expect(body.PaidDays).toEqual('test')
  expect(body.CL).toEqual('test')
  expect(body.EL).toEqual('test')
  expect(body.totaHrsAllowed).toEqual('test')
  expect(body.dutyHrs).toEqual('test')
  expect(body.weeklyOff).toEqual('test')
  expect(body.otHours).toEqual('test')
  expect(body.totalIncrements).toEqual('test')
  expect(body.IncrementAmount).toEqual('test')
  expect(body.scale).toEqual('test')
  expect(body.HRADeduction).toEqual('test')
  expect(body.HRA).toEqual('test')
  expect(body.DA).toEqual('test')
  expect(body.SA).toEqual('test')
  expect(body.OTA).toEqual('test')
  expect(body.EPFEmployee).toEqual('test')
  expect(body.EPFEmployer).toEqual('test')
  expect(body.loanRecovery).toEqual('test')
  expect(body.CTC).toEqual('test')
  expect(body.totalDeduction).toEqual('test')
  expect(body.netInHand).toEqual('test')
})

test('PUT /payrollScroll/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ scrollNo: 'test', partyId: 'test', payGradeId: 'test', payGrade: 'test', partyDetails: 'test', department: 'test', PresentDays: 'test', PaidDays: 'test', CL: 'test', EL: 'test', totaHrsAllowed: 'test', dutyHrs: 'test', weeklyOff: 'test', otHours: 'test', totalIncrements: 'test', IncrementAmount: 'test', scale: 'test', HRADeduction: 'test', HRA: 'test', DA: 'test', SA: 'test', OTA: 'test', EPFEmployee: 'test', EPFEmployer: 'test', loanRecovery: 'test', CTC: 'test', totalDeduction: 'test', netInHand: 'test' })
  expect(status).toBe(404)
})

test('DELETE /payrollScroll/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${payrollScroll.id}`)
  expect(status).toBe(204)
})

test('DELETE /payrollScroll/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
