import { Designations } from '.'

let designations

beforeEach(async () => {
  designations = await Designations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = designations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(designations.id)
    expect(view.code).toBe(designations.code)
    expect(view.description).toBe(designations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = designations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(designations.id)
    expect(view.code).toBe(designations.code)
    expect(view.description).toBe(designations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
