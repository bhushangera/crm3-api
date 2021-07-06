import { Holidays } from '.'

let holidays

beforeEach(async () => {
  holidays = await Holidays.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = holidays.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(holidays.id)
    expect(view.code).toBe(holidays.code)
    expect(view.description).toBe(holidays.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = holidays.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(holidays.id)
    expect(view.code).toBe(holidays.code)
    expect(view.description).toBe(holidays.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
