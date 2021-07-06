import { Goals } from '.'

let goals

beforeEach(async () => {
  goals = await Goals.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = goals.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(goals.id)
    expect(view.code).toBe(goals.code)
    expect(view.description).toBe(goals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = goals.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(goals.id)
    expect(view.code).toBe(goals.code)
    expect(view.description).toBe(goals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
