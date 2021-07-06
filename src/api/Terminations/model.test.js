import { Terminations } from '.'

let terminations

beforeEach(async () => {
  terminations = await Terminations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = terminations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(terminations.id)
    expect(view.code).toBe(terminations.code)
    expect(view.description).toBe(terminations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = terminations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(terminations.id)
    expect(view.code).toBe(terminations.code)
    expect(view.description).toBe(terminations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
