import { AssetLocations } from '.'

let assetLocations

beforeEach(async () => {
  assetLocations = await AssetLocations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = assetLocations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assetLocations.id)
    expect(view.code).toBe(assetLocations.code)
    expect(view.description).toBe(assetLocations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = assetLocations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assetLocations.id)
    expect(view.code).toBe(assetLocations.code)
    expect(view.description).toBe(assetLocations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
