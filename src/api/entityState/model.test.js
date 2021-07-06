import { EntityState } from '.'

let entityState

beforeEach(async () => {
  entityState = await EntityState.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = entityState.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entityState.id)
    expect(view.code).toBe(entityState.code)
    expect(view.description).toBe(entityState.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = entityState.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entityState.id)
    expect(view.code).toBe(entityState.code)
    expect(view.description).toBe(entityState.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
