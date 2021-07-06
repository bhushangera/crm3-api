import { Order } from '.'

let order

beforeEach(async () => {
  order = await Order.create({ datePlaced: 'test', timePlaced: 'test', UserId: 'test', PrderDetails: 'test', OrderAmount: 'test', GSTAmount: 'test', ShippingAmount: 'test', TotalValue: 'test', BillToParty: 'test', ShipToParty: 'test', PaidByParty: 'test', BillingAddressId: 'test', ShippingAddressId: 'test', OrderRemarks: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = order.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(order.id)
    expect(view.datePlaced).toBe(order.datePlaced)
    expect(view.timePlaced).toBe(order.timePlaced)
    expect(view.UserId).toBe(order.UserId)
    expect(view.PrderDetails).toBe(order.PrderDetails)
    expect(view.OrderAmount).toBe(order.OrderAmount)
    expect(view.GSTAmount).toBe(order.GSTAmount)
    expect(view.ShippingAmount).toBe(order.ShippingAmount)
    expect(view.TotalValue).toBe(order.TotalValue)
    expect(view.BillToParty).toBe(order.BillToParty)
    expect(view.ShipToParty).toBe(order.ShipToParty)
    expect(view.PaidByParty).toBe(order.PaidByParty)
    expect(view.BillingAddressId).toBe(order.BillingAddressId)
    expect(view.ShippingAddressId).toBe(order.ShippingAddressId)
    expect(view.OrderRemarks).toBe(order.OrderRemarks)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = order.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(order.id)
    expect(view.datePlaced).toBe(order.datePlaced)
    expect(view.timePlaced).toBe(order.timePlaced)
    expect(view.UserId).toBe(order.UserId)
    expect(view.PrderDetails).toBe(order.PrderDetails)
    expect(view.OrderAmount).toBe(order.OrderAmount)
    expect(view.GSTAmount).toBe(order.GSTAmount)
    expect(view.ShippingAmount).toBe(order.ShippingAmount)
    expect(view.TotalValue).toBe(order.TotalValue)
    expect(view.BillToParty).toBe(order.BillToParty)
    expect(view.ShipToParty).toBe(order.ShipToParty)
    expect(view.PaidByParty).toBe(order.PaidByParty)
    expect(view.BillingAddressId).toBe(order.BillingAddressId)
    expect(view.ShippingAddressId).toBe(order.ShippingAddressId)
    expect(view.OrderRemarks).toBe(order.OrderRemarks)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
