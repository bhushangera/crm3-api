import { PriceVariants } from '.'

let priceVariants

beforeEach(async () => {
  priceVariants = await PriceVariants.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = priceVariants.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(priceVariants.id)
    expect(view.code).toBe(priceVariants.code)
    expect(view.description).toBe(priceVariants.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = priceVariants.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(priceVariants.id)
    expect(view.code).toBe(priceVariants.code)
    expect(view.description).toBe(priceVariants.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
