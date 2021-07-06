import { PurchaseOrders } from '.'

let purchaseOrders

beforeEach(async () => {
  purchaseOrders = await PurchaseOrders.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = purchaseOrders.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(purchaseOrders.id)
    expect(view.code).toBe(purchaseOrders.code)
    expect(view.description).toBe(purchaseOrders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = purchaseOrders.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(purchaseOrders.id)
    expect(view.code).toBe(purchaseOrders.code)
    expect(view.description).toBe(purchaseOrders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
