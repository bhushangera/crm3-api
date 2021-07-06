import { Materials } from '.'

let materials

beforeEach(async () => {
  materials = await Materials.create({ materialCode: 'test', description: 'test', isBaseMaterial: 'test', isFinishingMaterial: 'test', isActive: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = materials.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(materials.id)
    expect(view.materialCode).toBe(materials.materialCode)
    expect(view.description).toBe(materials.description)
    expect(view.isBaseMaterial).toBe(materials.isBaseMaterial)
    expect(view.isFinishingMaterial).toBe(materials.isFinishingMaterial)
    expect(view.isActive).toBe(materials.isActive)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = materials.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(materials.id)
    expect(view.materialCode).toBe(materials.materialCode)
    expect(view.description).toBe(materials.description)
    expect(view.isBaseMaterial).toBe(materials.isBaseMaterial)
    expect(view.isFinishingMaterial).toBe(materials.isFinishingMaterial)
    expect(view.isActive).toBe(materials.isActive)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
