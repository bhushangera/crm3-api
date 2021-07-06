import { Countries } from '.'

let countries

beforeEach(async () => {
  countries = await Countries.create({ code: 'test', name: 'test', regionId: 'test', prefix: 'test', currency: 'test', currencyCode: 'test', USDFactor: 'test', INRFactor: 'test', PrimaryLanguage: 'test', alternateLanguage: 'test', slug: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = countries.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(countries.id)
    expect(view.code).toBe(countries.code)
    expect(view.name).toBe(countries.name)
    expect(view.regionId).toBe(countries.regionId)
    expect(view.prefix).toBe(countries.prefix)
    expect(view.currency).toBe(countries.currency)
    expect(view.currencyCode).toBe(countries.currencyCode)
    expect(view.USDFactor).toBe(countries.USDFactor)
    expect(view.INRFactor).toBe(countries.INRFactor)
    expect(view.PrimaryLanguage).toBe(countries.PrimaryLanguage)
    expect(view.alternateLanguage).toBe(countries.alternateLanguage)
    expect(view.slug).toBe(countries.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = countries.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(countries.id)
    expect(view.code).toBe(countries.code)
    expect(view.name).toBe(countries.name)
    expect(view.regionId).toBe(countries.regionId)
    expect(view.prefix).toBe(countries.prefix)
    expect(view.currency).toBe(countries.currency)
    expect(view.currencyCode).toBe(countries.currencyCode)
    expect(view.USDFactor).toBe(countries.USDFactor)
    expect(view.INRFactor).toBe(countries.INRFactor)
    expect(view.PrimaryLanguage).toBe(countries.PrimaryLanguage)
    expect(view.alternateLanguage).toBe(countries.alternateLanguage)
    expect(view.slug).toBe(countries.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
