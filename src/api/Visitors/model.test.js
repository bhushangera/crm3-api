import { Visitors } from '.'

let visitors

beforeEach(async () => {
  visitors = await Visitors.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = visitors.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(visitors.id)
    expect(view.code).toBe(visitors.code)
    expect(view.description).toBe(visitors.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = visitors.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(visitors.id)
    expect(view.code).toBe(visitors.code)
    expect(view.description).toBe(visitors.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
