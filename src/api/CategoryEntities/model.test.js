import { CategoryEntities } from '.'

let categoryEntities

beforeEach(async () => {
  categoryEntities = await CategoryEntities.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = categoryEntities.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoryEntities.id)
    expect(view.code).toBe(categoryEntities.code)
    expect(view.description).toBe(categoryEntities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = categoryEntities.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoryEntities.id)
    expect(view.code).toBe(categoryEntities.code)
    expect(view.description).toBe(categoryEntities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
