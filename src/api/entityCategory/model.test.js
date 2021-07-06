import { EntityCategory } from '.'

let entityCategory

beforeEach(async () => {
  entityCategory = await EntityCategory.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = entityCategory.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entityCategory.id)
    expect(view.code).toBe(entityCategory.code)
    expect(view.description).toBe(entityCategory.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = entityCategory.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entityCategory.id)
    expect(view.code).toBe(entityCategory.code)
    expect(view.description).toBe(entityCategory.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
