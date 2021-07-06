import { OrderPayment } from '.'

let orderPayment

beforeEach(async () => {
  orderPayment = await OrderPayment.create({ orderId: 'test', orderAmount: 'test', paymentDate: 'test', paymentMode: 'test', ChequeNo: 'test', ChequeDate: 'test', ChequeDetails: 'test', OnlineTransactionId: 'test', amount: 'test', remarks: 'test', postedById: 'test', postedBy: 'test', : 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = orderPayment.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(orderPayment.id)
    expect(view.orderId).toBe(orderPayment.orderId)
    expect(view.orderAmount).toBe(orderPayment.orderAmount)
    expect(view.paymentDate).toBe(orderPayment.paymentDate)
    expect(view.paymentMode).toBe(orderPayment.paymentMode)
    expect(view.ChequeNo).toBe(orderPayment.ChequeNo)
    expect(view.ChequeDate).toBe(orderPayment.ChequeDate)
    expect(view.ChequeDetails).toBe(orderPayment.ChequeDetails)
    expect(view.OnlineTransactionId).toBe(orderPayment.OnlineTransactionId)
    expect(view.amount).toBe(orderPayment.amount)
    expect(view.remarks).toBe(orderPayment.remarks)
    expect(view.postedById).toBe(orderPayment.postedById)
    expect(view.postedBy).toBe(orderPayment.postedBy)
    expect(view.).toBe(orderPayment.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = orderPayment.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(orderPayment.id)
    expect(view.orderId).toBe(orderPayment.orderId)
    expect(view.orderAmount).toBe(orderPayment.orderAmount)
    expect(view.paymentDate).toBe(orderPayment.paymentDate)
    expect(view.paymentMode).toBe(orderPayment.paymentMode)
    expect(view.ChequeNo).toBe(orderPayment.ChequeNo)
    expect(view.ChequeDate).toBe(orderPayment.ChequeDate)
    expect(view.ChequeDetails).toBe(orderPayment.ChequeDetails)
    expect(view.OnlineTransactionId).toBe(orderPayment.OnlineTransactionId)
    expect(view.amount).toBe(orderPayment.amount)
    expect(view.remarks).toBe(orderPayment.remarks)
    expect(view.postedById).toBe(orderPayment.postedById)
    expect(view.postedBy).toBe(orderPayment.postedBy)
    expect(view.).toBe(orderPayment.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
