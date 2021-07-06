import { SalesOrders } from '.'

let salesOrders

beforeEach(async () => {
  salesOrders = await SalesOrders.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = salesOrders.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salesOrders.id)
    expect(view.code).toBe(salesOrders.code)
    expect(view.description).toBe(salesOrders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = salesOrders.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salesOrders.id)
    expect(view.code).toBe(salesOrders.code)
    expect(view.description).toBe(salesOrders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
