import { Crmsettings } from '.'

let crmsettings

beforeEach(async () => {
  crmsettings = await Crmsettings.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = crmsettings.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(crmsettings.id)
    expect(view.code).toBe(crmsettings.code)
    expect(view.description).toBe(crmsettings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = crmsettings.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(crmsettings.id)
    expect(view.code).toBe(crmsettings.code)
    expect(view.description).toBe(crmsettings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
