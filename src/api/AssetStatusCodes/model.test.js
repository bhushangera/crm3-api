import { AssetStatusCodes } from '.'

let assetStatusCodes

beforeEach(async () => {
  assetStatusCodes = await AssetStatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = assetStatusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assetStatusCodes.id)
    expect(view.code).toBe(assetStatusCodes.code)
    expect(view.description).toBe(assetStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = assetStatusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assetStatusCodes.id)
    expect(view.code).toBe(assetStatusCodes.code)
    expect(view.description).toBe(assetStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
