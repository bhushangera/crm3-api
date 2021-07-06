import { CategoryReasons } from '.'

let categoryReasons

beforeEach(async () => {
  categoryReasons = await CategoryReasons.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = categoryReasons.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoryReasons.id)
    expect(view.code).toBe(categoryReasons.code)
    expect(view.description).toBe(categoryReasons.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = categoryReasons.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoryReasons.id)
    expect(view.code).toBe(categoryReasons.code)
    expect(view.description).toBe(categoryReasons.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
