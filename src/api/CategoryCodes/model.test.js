import { CategoryCodes } from '.'

let categoryCodes

beforeEach(async () => {
  categoryCodes = await CategoryCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = categoryCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoryCodes.id)
    expect(view.code).toBe(categoryCodes.code)
    expect(view.description).toBe(categoryCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = categoryCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(categoryCodes.id)
    expect(view.code).toBe(categoryCodes.code)
    expect(view.description).toBe(categoryCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
