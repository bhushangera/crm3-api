import { Units } from '.'

let units

beforeEach(async () => {
  units = await Units.create({ group: 'test', unit: 'test', symbol: 'test', slug: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = units.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(units.id)
    expect(view.group).toBe(units.group)
    expect(view.unit).toBe(units.unit)
    expect(view.symbol).toBe(units.symbol)
    expect(view.slug).toBe(units.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = units.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(units.id)
    expect(view.group).toBe(units.group)
    expect(view.unit).toBe(units.unit)
    expect(view.symbol).toBe(units.symbol)
    expect(view.slug).toBe(units.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
