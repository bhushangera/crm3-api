import { PaymentTerms } from '.'

let paymentTerms

beforeEach(async () => {
  paymentTerms = await PaymentTerms.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = paymentTerms.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(paymentTerms.id)
    expect(view.code).toBe(paymentTerms.code)
    expect(view.description).toBe(paymentTerms.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = paymentTerms.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(paymentTerms.id)
    expect(view.code).toBe(paymentTerms.code)
    expect(view.description).toBe(paymentTerms.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
