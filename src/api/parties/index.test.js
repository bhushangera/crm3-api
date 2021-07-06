import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Parties } from '.'

const app = () => express(apiRoot, routes)

let parties

beforeEach(async () => {
  parties = await Parties.create({})
})

test('POST /parties 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ userId: 'test', name: 'test', partyType: 'test', organizationName: 'test', PartyRoleId: 'test', PartyelRole: 'test', PAN: 'test', TAN: 'test', GSTIN: 'test', addressTypeId: 'test', addressType: 'test', contactId: 'test', UIDAI: 'test', ESINumber: 'test', EPFNumber: 'test', DLNo: 'test', bloodGroup: 'test', physicalFitnness: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.partyType).toEqual('test')
  expect(body.organizationName).toEqual('test')
  expect(body.PartyRoleId).toEqual('test')
  expect(body.PartyelRole).toEqual('test')
  expect(body.PAN).toEqual('test')
  expect(body.TAN).toEqual('test')
  expect(body.GSTIN).toEqual('test')
  expect(body.addressTypeId).toEqual('test')
  expect(body.addressType).toEqual('test')
  expect(body.contactId).toEqual('test')
  expect(body.UIDAI).toEqual('test')
  expect(body.ESINumber).toEqual('test')
  expect(body.EPFNumber).toEqual('test')
  expect(body.DLNo).toEqual('test')
  expect(body.bloodGroup).toEqual('test')
  expect(body.physicalFitnness).toEqual('test')
})

test('GET /parties 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /parties/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${parties.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(parties.id)
})

test('GET /parties/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /parties/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${parties.id}`)
    .send({ userId: 'test', name: 'test', partyType: 'test', organizationName: 'test', PartyRoleId: 'test', PartyelRole: 'test', PAN: 'test', TAN: 'test', GSTIN: 'test', addressTypeId: 'test', addressType: 'test', contactId: 'test', UIDAI: 'test', ESINumber: 'test', EPFNumber: 'test', DLNo: 'test', bloodGroup: 'test', physicalFitnness: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(parties.id)
  expect(body.userId).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.partyType).toEqual('test')
  expect(body.organizationName).toEqual('test')
  expect(body.PartyRoleId).toEqual('test')
  expect(body.PartyelRole).toEqual('test')
  expect(body.PAN).toEqual('test')
  expect(body.TAN).toEqual('test')
  expect(body.GSTIN).toEqual('test')
  expect(body.addressTypeId).toEqual('test')
  expect(body.addressType).toEqual('test')
  expect(body.contactId).toEqual('test')
  expect(body.UIDAI).toEqual('test')
  expect(body.ESINumber).toEqual('test')
  expect(body.EPFNumber).toEqual('test')
  expect(body.DLNo).toEqual('test')
  expect(body.bloodGroup).toEqual('test')
  expect(body.physicalFitnness).toEqual('test')
})

test('PUT /parties/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ userId: 'test', name: 'test', partyType: 'test', organizationName: 'test', PartyRoleId: 'test', PartyelRole: 'test', PAN: 'test', TAN: 'test', GSTIN: 'test', addressTypeId: 'test', addressType: 'test', contactId: 'test', UIDAI: 'test', ESINumber: 'test', EPFNumber: 'test', DLNo: 'test', bloodGroup: 'test', physicalFitnness: 'test' })
  expect(status).toBe(404)
})

test('DELETE /parties/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${parties.id}`)
  expect(status).toBe(204)
})

test('DELETE /parties/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
