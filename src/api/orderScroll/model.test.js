import { OrderScroll } from '.'

let orderScroll

beforeEach(async () => {
  orderScroll = await OrderScroll.create({ orderId: 'test', SKUId: 'test', PIId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = orderScroll.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(orderScroll.id)
    expect(view.orderId).toBe(orderScroll.orderId)
    expect(view.SKUId).toBe(orderScroll.SKUId)
    expect(view.PIId).toBe(orderScroll.PIId)
    expect(view.Price).toBe(orderScroll.Price)
    expect(view.discount).toBe(orderScroll.discount)
    expect(view.GST).toBe(orderScroll.GST)
    expect(view.GSTAmount).toBe(orderScroll.GSTAmount)
    expect(view.Qty).toBe(orderScroll.Qty)
    expect(view.shipping).toBe(orderScroll.shipping)
    expect(view.totalAmount).toBe(orderScroll.totalAmount)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = orderScroll.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(orderScroll.id)
    expect(view.orderId).toBe(orderScroll.orderId)
    expect(view.SKUId).toBe(orderScroll.SKUId)
    expect(view.PIId).toBe(orderScroll.PIId)
    expect(view.Price).toBe(orderScroll.Price)
    expect(view.discount).toBe(orderScroll.discount)
    expect(view.GST).toBe(orderScroll.GST)
    expect(view.GSTAmount).toBe(orderScroll.GSTAmount)
    expect(view.Qty).toBe(orderScroll.Qty)
    expect(view.shipping).toBe(orderScroll.shipping)
    expect(view.totalAmount).toBe(orderScroll.totalAmount)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
