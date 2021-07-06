import { PriceBook } from '.'

let priceBook

beforeEach(async () => {
  priceBook = await PriceBook.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = priceBook.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(priceBook.id)
    expect(view.code).toBe(priceBook.code)
    expect(view.description).toBe(priceBook.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = priceBook.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(priceBook.id)
    expect(view.code).toBe(priceBook.code)
    expect(view.description).toBe(priceBook.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
