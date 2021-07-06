import { FixedAssetTypes } from '.'

let fixedAssetTypes

beforeEach(async () => {
  fixedAssetTypes = await FixedAssetTypes.create({ type: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = fixedAssetTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssetTypes.id)
    expect(view.type).toBe(fixedAssetTypes.type)
    expect(view.description).toBe(fixedAssetTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = fixedAssetTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssetTypes.id)
    expect(view.type).toBe(fixedAssetTypes.type)
    expect(view.description).toBe(fixedAssetTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
