import { Travels } from '.'

let travels

beforeEach(async () => {
  travels = await Travels.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = travels.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(travels.id)
    expect(view.code).toBe(travels.code)
    expect(view.description).toBe(travels.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = travels.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(travels.id)
    expect(view.code).toBe(travels.code)
    expect(view.description).toBe(travels.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
