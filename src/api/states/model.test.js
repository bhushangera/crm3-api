import { States } from '.'

let states

beforeEach(async () => {
  states = await States.create({ countryId: 'test', country: 'test', code: 'test', name: 'test', slug: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = states.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(states.id)
    expect(view.countryId).toBe(states.countryId)
    expect(view.country).toBe(states.country)
    expect(view.code).toBe(states.code)
    expect(view.name).toBe(states.name)
    expect(view.slug).toBe(states.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = states.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(states.id)
    expect(view.countryId).toBe(states.countryId)
    expect(view.country).toBe(states.country)
    expect(view.code).toBe(states.code)
    expect(view.name).toBe(states.name)
    expect(view.slug).toBe(states.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
