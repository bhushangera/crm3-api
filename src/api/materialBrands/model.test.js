import { MaterialBrands } from '.'

let materialBrands

beforeEach(async () => {
  materialBrands = await MaterialBrands.create({ materialId: 'test', material: 'test', makeId: 'test', make: 'test', SMCId: 'test', MCId: 'test', MCCode: 'test', SMCCode: 'test', slug: 'test', isActive: 'test', image: 'test', mType: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = materialBrands.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(materialBrands.id)
    expect(view.materialId).toBe(materialBrands.materialId)
    expect(view.material).toBe(materialBrands.material)
    expect(view.makeId).toBe(materialBrands.makeId)
    expect(view.make).toBe(materialBrands.make)
    expect(view.SMCId).toBe(materialBrands.SMCId)
    expect(view.MCId).toBe(materialBrands.MCId)
    expect(view.MCCode).toBe(materialBrands.MCCode)
    expect(view.SMCCode).toBe(materialBrands.SMCCode)
    expect(view.slug).toBe(materialBrands.slug)
    expect(view.isActive).toBe(materialBrands.isActive)
    expect(view.image).toBe(materialBrands.image)
    expect(view.mType).toBe(materialBrands.mType)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = materialBrands.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(materialBrands.id)
    expect(view.materialId).toBe(materialBrands.materialId)
    expect(view.material).toBe(materialBrands.material)
    expect(view.makeId).toBe(materialBrands.makeId)
    expect(view.make).toBe(materialBrands.make)
    expect(view.SMCId).toBe(materialBrands.SMCId)
    expect(view.MCId).toBe(materialBrands.MCId)
    expect(view.MCCode).toBe(materialBrands.MCCode)
    expect(view.SMCCode).toBe(materialBrands.SMCCode)
    expect(view.slug).toBe(materialBrands.slug)
    expect(view.isActive).toBe(materialBrands.isActive)
    expect(view.image).toBe(materialBrands.image)
    expect(view.mType).toBe(materialBrands.mType)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
