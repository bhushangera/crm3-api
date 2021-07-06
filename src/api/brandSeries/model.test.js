import { BrandSeries } from '.'

let brandSeries

beforeEach(async () => {
  brandSeries = await BrandSeries.create({ materialBrandId: 'test', series: 'test', slug: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = brandSeries.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(brandSeries.id)
    expect(view.materialBrandId).toBe(brandSeries.materialBrandId)
    expect(view.series).toBe(brandSeries.series)
    expect(view.slug).toBe(brandSeries.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = brandSeries.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(brandSeries.id)
    expect(view.materialBrandId).toBe(brandSeries.materialBrandId)
    expect(view.series).toBe(brandSeries.series)
    expect(view.slug).toBe(brandSeries.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
