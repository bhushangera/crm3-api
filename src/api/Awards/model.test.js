import { Awards } from '.'

let awards

beforeEach(async () => {
  awards = await Awards.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = awards.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(awards.id)
    expect(view.code).toBe(awards.code)
    expect(view.description).toBe(awards.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = awards.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(awards.id)
    expect(view.code).toBe(awards.code)
    expect(view.description).toBe(awards.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
