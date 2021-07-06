import { Warnings } from '.'

let warnings

beforeEach(async () => {
  warnings = await Warnings.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = warnings.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(warnings.id)
    expect(view.code).toBe(warnings.code)
    expect(view.description).toBe(warnings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = warnings.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(warnings.id)
    expect(view.code).toBe(warnings.code)
    expect(view.description).toBe(warnings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
