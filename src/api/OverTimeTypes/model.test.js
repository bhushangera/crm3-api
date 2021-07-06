import { OverTimeTypes } from '.'

let overTimeTypes

beforeEach(async () => {
  overTimeTypes = await OverTimeTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = overTimeTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(overTimeTypes.id)
    expect(view.code).toBe(overTimeTypes.code)
    expect(view.description).toBe(overTimeTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = overTimeTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(overTimeTypes.id)
    expect(view.code).toBe(overTimeTypes.code)
    expect(view.description).toBe(overTimeTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
