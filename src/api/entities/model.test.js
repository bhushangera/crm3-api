import { Entities } from '.'

let entities

beforeEach(async () => {
  entities = await Entities.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = entities.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entities.id)
    expect(view.code).toBe(entities.code)
    expect(view.description).toBe(entities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = entities.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(entities.id)
    expect(view.code).toBe(entities.code)
    expect(view.description).toBe(entities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
