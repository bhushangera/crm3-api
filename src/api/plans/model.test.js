import { Plans } from '.'

let plans

beforeEach(async () => {
  plans = await Plans.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = plans.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(plans.id)
    expect(view.code).toBe(plans.code)
    expect(view.description).toBe(plans.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = plans.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(plans.id)
    expect(view.code).toBe(plans.code)
    expect(view.description).toBe(plans.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
