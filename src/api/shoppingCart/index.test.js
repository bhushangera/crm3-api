import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ShoppingCart } from '.'

const app = () => express(apiRoot, routes)

let shoppingCart

beforeEach(async () => {
  shoppingCart = await ShoppingCart.create({})
})

test('POST /shoppingCart 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ dateAdded: 'test', userId: 'test', partyId: 'test', PIId: 'test', SKUId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test', wishlist: 'test', ordered: 'test', trash: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.dateAdded).toEqual('test')
  expect(body.userId).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.PIId).toEqual('test')
  expect(body.SKUId).toEqual('test')
  expect(body.Price).toEqual('test')
  expect(body.discount).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.GSTAmount).toEqual('test')
  expect(body.Qty).toEqual('test')
  expect(body.shipping).toEqual('test')
  expect(body.totalAmount).toEqual('test')
  expect(body.wishlist).toEqual('test')
  expect(body.ordered).toEqual('test')
  expect(body.trash).toEqual('test')
})

test('GET /shoppingCart 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /shoppingCart/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${shoppingCart.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shoppingCart.id)
})

test('GET /shoppingCart/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /shoppingCart/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${shoppingCart.id}`)
    .send({ dateAdded: 'test', userId: 'test', partyId: 'test', PIId: 'test', SKUId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test', wishlist: 'test', ordered: 'test', trash: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shoppingCart.id)
  expect(body.dateAdded).toEqual('test')
  expect(body.userId).toEqual('test')
  expect(body.partyId).toEqual('test')
  expect(body.PIId).toEqual('test')
  expect(body.SKUId).toEqual('test')
  expect(body.Price).toEqual('test')
  expect(body.discount).toEqual('test')
  expect(body.GST).toEqual('test')
  expect(body.GSTAmount).toEqual('test')
  expect(body.Qty).toEqual('test')
  expect(body.shipping).toEqual('test')
  expect(body.totalAmount).toEqual('test')
  expect(body.wishlist).toEqual('test')
  expect(body.ordered).toEqual('test')
  expect(body.trash).toEqual('test')
})

test('PUT /shoppingCart/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ dateAdded: 'test', userId: 'test', partyId: 'test', PIId: 'test', SKUId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test', wishlist: 'test', ordered: 'test', trash: 'test' })
  expect(status).toBe(404)
})

test('DELETE /shoppingCart/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${shoppingCart.id}`)
  expect(status).toBe(204)
})

test('DELETE /shoppingCart/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
