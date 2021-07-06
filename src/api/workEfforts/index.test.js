import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WorkEfforts } from '.'

const app = () => express(apiRoot, routes)

let workEfforts

beforeEach(async () => {
  workEfforts = await WorkEfforts.create({})
})

test('POST /workEfforts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ scrollNo: 'test', ticketId: 'test', workEffectTypeId: 'test', wordEffectType: 'test', description: 'test', sheduledStartDate: 'test', sheduledEndDate: 'test', actualStartDate: 'test', actualEndDate: 'test', totalBudget: 'test', totalHours: 'test', actualHours: 'test', specialTerms: 'test', productionRun: 'test', qtyToProduce: 'test', qtyProduced: 'test', qtyRejected: 'test', runType: 'test', complete: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.scrollNo).toEqual('test')
  expect(body.ticketId).toEqual('test')
  expect(body.workEffectTypeId).toEqual('test')
  expect(body.wordEffectType).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.sheduledStartDate).toEqual('test')
  expect(body.sheduledEndDate).toEqual('test')
  expect(body.actualStartDate).toEqual('test')
  expect(body.actualEndDate).toEqual('test')
  expect(body.totalBudget).toEqual('test')
  expect(body.totalHours).toEqual('test')
  expect(body.actualHours).toEqual('test')
  expect(body.specialTerms).toEqual('test')
  expect(body.productionRun).toEqual('test')
  expect(body.qtyToProduce).toEqual('test')
  expect(body.qtyProduced).toEqual('test')
  expect(body.qtyRejected).toEqual('test')
  expect(body.runType).toEqual('test')
  expect(body.complete).toEqual('test')
})

test('GET /workEfforts 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /workEfforts/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${workEfforts.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workEfforts.id)
})

test('GET /workEfforts/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /workEfforts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${workEfforts.id}`)
    .send({ scrollNo: 'test', ticketId: 'test', workEffectTypeId: 'test', wordEffectType: 'test', description: 'test', sheduledStartDate: 'test', sheduledEndDate: 'test', actualStartDate: 'test', actualEndDate: 'test', totalBudget: 'test', totalHours: 'test', actualHours: 'test', specialTerms: 'test', productionRun: 'test', qtyToProduce: 'test', qtyProduced: 'test', qtyRejected: 'test', runType: 'test', complete: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(workEfforts.id)
  expect(body.scrollNo).toEqual('test')
  expect(body.ticketId).toEqual('test')
  expect(body.workEffectTypeId).toEqual('test')
  expect(body.wordEffectType).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.sheduledStartDate).toEqual('test')
  expect(body.sheduledEndDate).toEqual('test')
  expect(body.actualStartDate).toEqual('test')
  expect(body.actualEndDate).toEqual('test')
  expect(body.totalBudget).toEqual('test')
  expect(body.totalHours).toEqual('test')
  expect(body.actualHours).toEqual('test')
  expect(body.specialTerms).toEqual('test')
  expect(body.productionRun).toEqual('test')
  expect(body.qtyToProduce).toEqual('test')
  expect(body.qtyProduced).toEqual('test')
  expect(body.qtyRejected).toEqual('test')
  expect(body.runType).toEqual('test')
  expect(body.complete).toEqual('test')
})

test('PUT /workEfforts/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ scrollNo: 'test', ticketId: 'test', workEffectTypeId: 'test', wordEffectType: 'test', description: 'test', sheduledStartDate: 'test', sheduledEndDate: 'test', actualStartDate: 'test', actualEndDate: 'test', totalBudget: 'test', totalHours: 'test', actualHours: 'test', specialTerms: 'test', productionRun: 'test', qtyToProduce: 'test', qtyProduced: 'test', qtyRejected: 'test', runType: 'test', complete: 'test' })
  expect(status).toBe(404)
})

test('DELETE /workEfforts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${workEfforts.id}`)
  expect(status).toBe(204)
})

test('DELETE /workEfforts/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
