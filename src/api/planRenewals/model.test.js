import { PlanRenewals } from '.'

let planRenewals

beforeEach(async () => {
  planRenewals = await PlanRenewals.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = planRenewals.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(planRenewals.id)
    expect(view.code).toBe(planRenewals.code)
    expect(view.description).toBe(planRenewals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = planRenewals.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(planRenewals.id)
    expect(view.code).toBe(planRenewals.code)
    expect(view.description).toBe(planRenewals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
