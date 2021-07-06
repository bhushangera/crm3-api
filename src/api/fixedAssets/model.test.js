import { FixedAssets } from '.'

let fixedAssets

beforeEach(async () => {
  fixedAssets = await FixedAssets.create({ fixedAssetTypeId: 'test', fixedAssetType: 'test', assetName: 'test', dateAcquired: 'test', inWarranty: 'test', warrantyExpDate: 'test', dailyProductionCapacity: 'test', uomId: 'test', uom: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = fixedAssets.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssets.id)
    expect(view.fixedAssetTypeId).toBe(fixedAssets.fixedAssetTypeId)
    expect(view.fixedAssetType).toBe(fixedAssets.fixedAssetType)
    expect(view.assetName).toBe(fixedAssets.assetName)
    expect(view.dateAcquired).toBe(fixedAssets.dateAcquired)
    expect(view.inWarranty).toBe(fixedAssets.inWarranty)
    expect(view.warrantyExpDate).toBe(fixedAssets.warrantyExpDate)
    expect(view.dailyProductionCapacity).toBe(fixedAssets.dailyProductionCapacity)
    expect(view.uomId).toBe(fixedAssets.uomId)
    expect(view.uom).toBe(fixedAssets.uom)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = fixedAssets.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssets.id)
    expect(view.fixedAssetTypeId).toBe(fixedAssets.fixedAssetTypeId)
    expect(view.fixedAssetType).toBe(fixedAssets.fixedAssetType)
    expect(view.assetName).toBe(fixedAssets.assetName)
    expect(view.dateAcquired).toBe(fixedAssets.dateAcquired)
    expect(view.inWarranty).toBe(fixedAssets.inWarranty)
    expect(view.warrantyExpDate).toBe(fixedAssets.warrantyExpDate)
    expect(view.dailyProductionCapacity).toBe(fixedAssets.dailyProductionCapacity)
    expect(view.uomId).toBe(fixedAssets.uomId)
    expect(view.uom).toBe(fixedAssets.uom)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
