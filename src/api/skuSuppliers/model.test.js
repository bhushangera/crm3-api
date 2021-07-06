import { SkuSuppliers } from '.'

let skuSuppliers

beforeEach(async () => {
  skuSuppliers = await SkuSuppliers.create({ SKUId: 'test', partyId: 'test', leadTime: 'test', ratingId: 'test', stars: 'test', rating: 'test', priority: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = skuSuppliers.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(skuSuppliers.id)
    expect(view.SKUId).toBe(skuSuppliers.SKUId)
    expect(view.partyId).toBe(skuSuppliers.partyId)
    expect(view.leadTime).toBe(skuSuppliers.leadTime)
    expect(view.ratingId).toBe(skuSuppliers.ratingId)
    expect(view.stars).toBe(skuSuppliers.stars)
    expect(view.rating).toBe(skuSuppliers.rating)
    expect(view.priority).toBe(skuSuppliers.priority)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = skuSuppliers.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(skuSuppliers.id)
    expect(view.SKUId).toBe(skuSuppliers.SKUId)
    expect(view.partyId).toBe(skuSuppliers.partyId)
    expect(view.leadTime).toBe(skuSuppliers.leadTime)
    expect(view.ratingId).toBe(skuSuppliers.ratingId)
    expect(view.stars).toBe(skuSuppliers.stars)
    expect(view.rating).toBe(skuSuppliers.rating)
    expect(view.priority).toBe(skuSuppliers.priority)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
