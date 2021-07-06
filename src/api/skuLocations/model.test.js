import { SkuLocations } from '.'

let skuLocations

beforeEach(async () => {
  skuLocations = await SkuLocations.create({ SKUId: 'test', SKU: 'test', partyId: 'test', partyDetails: 'test', SUId: 'test', SUCode: 'test', SUPId: 'test', SUPCode: 'test', partitionSize: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = skuLocations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(skuLocations.id)
    expect(view.SKUId).toBe(skuLocations.SKUId)
    expect(view.SKU).toBe(skuLocations.SKU)
    expect(view.partyId).toBe(skuLocations.partyId)
    expect(view.partyDetails).toBe(skuLocations.partyDetails)
    expect(view.SUId).toBe(skuLocations.SUId)
    expect(view.SUCode).toBe(skuLocations.SUCode)
    expect(view.SUPId).toBe(skuLocations.SUPId)
    expect(view.SUPCode).toBe(skuLocations.SUPCode)
    expect(view.partitionSize).toBe(skuLocations.partitionSize)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = skuLocations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(skuLocations.id)
    expect(view.SKUId).toBe(skuLocations.SKUId)
    expect(view.SKU).toBe(skuLocations.SKU)
    expect(view.partyId).toBe(skuLocations.partyId)
    expect(view.partyDetails).toBe(skuLocations.partyDetails)
    expect(view.SUId).toBe(skuLocations.SUId)
    expect(view.SUCode).toBe(skuLocations.SUCode)
    expect(view.SUPId).toBe(skuLocations.SUPId)
    expect(view.SUPCode).toBe(skuLocations.SUPCode)
    expect(view.partitionSize).toBe(skuLocations.partitionSize)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
