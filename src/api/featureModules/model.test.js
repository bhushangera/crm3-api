import { FeatureModules } from '.'

let featureModules

beforeEach(async () => {
  featureModules = await FeatureModules.create({ code: 'test', description: 'test', active: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = featureModules.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(featureModules.id)
    expect(view.code).toBe(featureModules.code)
    expect(view.description).toBe(featureModules.description)
    expect(view.active).toBe(featureModules.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = featureModules.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(featureModules.id)
    expect(view.code).toBe(featureModules.code)
    expect(view.description).toBe(featureModules.description)
    expect(view.active).toBe(featureModules.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
