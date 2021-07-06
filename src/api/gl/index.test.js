import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Gl } from '.'

const app = () => express(apiRoot, routes)

let gl

beforeEach(async () => {
  gl = await Gl.create({})
})

test('POST /gl 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ txDate: 'test', debitACId: 'test', creditACId: 'test', debitAC: 'test', creditAC: 'test', amount: 'test', postedById: 'test', postedBy: 'test', approvedById: 'test', approovedBy: 'test', verifiedById: 'test', verifiedBy: 'test', vDate: 'test', aDate: 'test', remarks: 'test', opdId: 'test', ipdId: 'test', pInvId: 'test', erId: 'test', UHID: 'test', partyId: 'test', patientName: 'test', bookingId: 'test', partyName: 'test', accountType: 'test', code: 'test', description: 'test', txnType: 'test', modified: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.txDate).toEqual('test')
  expect(body.debitACId).toEqual('test')
  expect(body.creditACId).toEqual('test')
  expect(body.debitAC).toEqual('test')
  expect(body.creditAC).toEqual('test')
  expect(body.amount).toEqual('test')
  expect(body.postedById).toEqual('test')
  expect(body.postedBy).toEqual('test')
  expect(body.approvedById).toEqual('test')
  expect(body.approovedBy).toEqual('test')
  expect(body.verifiedById).toEqual('test')
  expect(body.verifiedBy).toEqual('test')
  expect(body.vDate).toEqual('test')
  expect(body.aDate).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.opdId).toEqual('test')
  expect(body.ipdId).toEqual('test')
  expect(body.pInvId).toEqual('test')
  expect(body.erId).toEqual('test')
  expect(body.UHID).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.patientName).toEqual('test')
  expect(body.bookingId).toEqual('test')
  expect(body.partyName).toEqual('test')
  expect(body.accountType).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.txnType).toEqual('test')
  expect(body.modified).toEqual('test')
})

test('GET /gl 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /gl/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${gl.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gl.id)
})

test('GET /gl/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /gl/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${gl.id}`)
    .send({ txDate: 'test', debitACId: 'test', creditACId: 'test', debitAC: 'test', creditAC: 'test', amount: 'test', postedById: 'test', postedBy: 'test', approvedById: 'test', approovedBy: 'test', verifiedById: 'test', verifiedBy: 'test', vDate: 'test', aDate: 'test', remarks: 'test', opdId: 'test', ipdId: 'test', pInvId: 'test', erId: 'test', UHID: 'test', partyId: 'test', patientName: 'test', bookingId: 'test', partyName: 'test', accountType: 'test', code: 'test', description: 'test', txnType: 'test', modified: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gl.id)
  expect(body.txDate).toEqual('test')
  expect(body.debitACId).toEqual('test')
  expect(body.creditACId).toEqual('test')
  expect(body.debitAC).toEqual('test')
  expect(body.creditAC).toEqual('test')
  expect(body.amount).toEqual('test')
  expect(body.postedById).toEqual('test')
  expect(body.postedBy).toEqual('test')
  expect(body.approvedById).toEqual('test')
  expect(body.approovedBy).toEqual('test')
  expect(body.verifiedById).toEqual('test')
  expect(body.verifiedBy).toEqual('test')
  expect(body.vDate).toEqual('test')
  expect(body.aDate).toEqual('test')
  expect(body.remarks).toEqual('test')
  expect(body.opdId).toEqual('test')
  expect(body.ipdId).toEqual('test')
  expect(body.pInvId).toEqual('test')
  expect(body.erId).toEqual('test')
  expect(body.UHID).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.patientName).toEqual('test')
  expect(body.bookingId).toEqual('test')
  expect(body.partyName).toEqual('test')
  expect(body.accountType).toEqual('test')
  expect(body.code).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.txnType).toEqual('test')
  expect(body.modified).toEqual('test')
})

test('PUT /gl/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ txDate: 'test', debitACId: 'test', creditACId: 'test', debitAC: 'test', creditAC: 'test', amount: 'test', postedById: 'test', postedBy: 'test', approvedById: 'test', approovedBy: 'test', verifiedById: 'test', verifiedBy: 'test', vDate: 'test', aDate: 'test', remarks: 'test', opdId: 'test', ipdId: 'test', pInvId: 'test', erId: 'test', UHID: 'test', partyId: 'test', patientName: 'test', bookingId: 'test', partyName: 'test', accountType: 'test', code: 'test', description: 'test', txnType: 'test', modified: 'test' })
  expect(status).toBe(404)
})

test('DELETE /gl/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${gl.id}`)
  expect(status).toBe(204)
})

test('DELETE /gl/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
