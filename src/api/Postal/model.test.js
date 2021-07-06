import { Postal } from '.'

let postal

beforeEach(async () => {
  postal = await Postal.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = postal.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(postal.id)
    expect(view.code).toBe(postal.code)
    expect(view.description).toBe(postal.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = postal.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(postal.id)
    expect(view.code).toBe(postal.code)
    expect(view.description).toBe(postal.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
