import { GoalTypes } from '.'

let goalTypes

beforeEach(async () => {
  goalTypes = await GoalTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = goalTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(goalTypes.id)
    expect(view.code).toBe(goalTypes.code)
    expect(view.description).toBe(goalTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = goalTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(goalTypes.id)
    expect(view.code).toBe(goalTypes.code)
    expect(view.description).toBe(goalTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
