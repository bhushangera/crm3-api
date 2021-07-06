import { ProductionPlan } from '.'

let productionPlan

beforeEach(async () => {
  productionPlan = await ProductionPlan.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = productionPlan.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productionPlan.id)
    expect(view.code).toBe(productionPlan.code)
    expect(view.description).toBe(productionPlan.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = productionPlan.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productionPlan.id)
    expect(view.code).toBe(productionPlan.code)
    expect(view.description).toBe(productionPlan.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
