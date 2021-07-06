import { TaxRates } from '.'

let taxRates

beforeEach(async () => {
  taxRates = await TaxRates.create({ code: 'test', descrption: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = taxRates.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(taxRates.id)
    expect(view.code).toBe(taxRates.code)
    expect(view.descrption).toBe(taxRates.descrption)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = taxRates.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(taxRates.id)
    expect(view.code).toBe(taxRates.code)
    expect(view.descrption).toBe(taxRates.descrption)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
