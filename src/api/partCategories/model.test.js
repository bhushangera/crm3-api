import { PartCategories } from '.'

let partCategories

beforeEach(async () => {
  partCategories = await PartCategories.create({ category: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = partCategories.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partCategories.id)
    expect(view.category).toBe(partCategories.category)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = partCategories.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partCategories.id)
    expect(view.category).toBe(partCategories.category)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
