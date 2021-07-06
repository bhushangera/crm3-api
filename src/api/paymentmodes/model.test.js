import { PaymentModes } from '.'

let paymentModes

beforeEach(async () => {
  paymentModes = await PaymentModes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = paymentModes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(paymentModes.id)
    expect(view.code).toBe(paymentModes.code)
    expect(view.description).toBe(paymentModes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = paymentModes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(paymentModes.id)
    expect(view.code).toBe(paymentModes.code)
    expect(view.description).toBe(paymentModes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
