import { AssetCategories } from '.'

let assetCategories

beforeEach(async () => {
  assetCategories = await AssetCategories.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = assetCategories.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assetCategories.id)
    expect(view.code).toBe(assetCategories.code)
    expect(view.description).toBe(assetCategories.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = assetCategories.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assetCategories.id)
    expect(view.code).toBe(assetCategories.code)
    expect(view.description).toBe(assetCategories.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
