import { Currency } from '.'

let currency

beforeEach(async () => {
  currency = await Currency.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = currency.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(currency.id)
    expect(view.code).toBe(currency.code)
    expect(view.description).toBe(currency.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = currency.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(currency.id)
    expect(view.code).toBe(currency.code)
    expect(view.description).toBe(currency.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
