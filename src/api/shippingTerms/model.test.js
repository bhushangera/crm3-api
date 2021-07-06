import { ShippingTerms } from '.'

let shippingTerms

beforeEach(async () => {
  shippingTerms = await ShippingTerms.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = shippingTerms.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shippingTerms.id)
    expect(view.code).toBe(shippingTerms.code)
    expect(view.description).toBe(shippingTerms.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = shippingTerms.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shippingTerms.id)
    expect(view.code).toBe(shippingTerms.code)
    expect(view.description).toBe(shippingTerms.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
