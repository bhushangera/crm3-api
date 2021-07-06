import { StatusEntities } from '.'

let statusEntities

beforeEach(async () => {
  statusEntities = await StatusEntities.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = statusEntities.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(statusEntities.id)
    expect(view.code).toBe(statusEntities.code)
    expect(view.description).toBe(statusEntities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = statusEntities.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(statusEntities.id)
    expect(view.code).toBe(statusEntities.code)
    expect(view.description).toBe(statusEntities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
