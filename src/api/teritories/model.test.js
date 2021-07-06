import { Teritories } from '.'

let teritories

beforeEach(async () => {
  teritories = await Teritories.create({ locCode: 'test', city: 'test', state: 'test', country: 'test', pinCode: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = teritories.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(teritories.id)
    expect(view.locCode).toBe(teritories.locCode)
    expect(view.city).toBe(teritories.city)
    expect(view.state).toBe(teritories.state)
    expect(view.country).toBe(teritories.country)
    expect(view.pinCode).toBe(teritories.pinCode)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = teritories.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(teritories.id)
    expect(view.locCode).toBe(teritories.locCode)
    expect(view.city).toBe(teritories.city)
    expect(view.state).toBe(teritories.state)
    expect(view.country).toBe(teritories.country)
    expect(view.pinCode).toBe(teritories.pinCode)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
