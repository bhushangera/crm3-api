import { EntityGroups } from '.'

let entityGroups

beforeEach(async () => {
  entityGroups = await EntityGroups.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = entityGroups.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entityGroups.id)
    expect(view.code).toBe(entityGroups.code)
    expect(view.description).toBe(entityGroups.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = entityGroups.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entityGroups.id)
    expect(view.code).toBe(entityGroups.code)
    expect(view.description).toBe(entityGroups.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
