import { PostalTypes } from '.'

let postalTypes

beforeEach(async () => {
  postalTypes = await PostalTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = postalTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(postalTypes.id)
    expect(view.code).toBe(postalTypes.code)
    expect(view.description).toBe(postalTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = postalTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(postalTypes.id)
    expect(view.code).toBe(postalTypes.code)
    expect(view.description).toBe(postalTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
