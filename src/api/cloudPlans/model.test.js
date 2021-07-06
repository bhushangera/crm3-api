import { CloudPlans } from '.'

let cloudPlans

beforeEach(async () => {
  cloudPlans = await CloudPlans.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cloudPlans.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cloudPlans.id)
    expect(view.code).toBe(cloudPlans.code)
    expect(view.description).toBe(cloudPlans.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cloudPlans.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cloudPlans.id)
    expect(view.code).toBe(cloudPlans.code)
    expect(view.description).toBe(cloudPlans.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
