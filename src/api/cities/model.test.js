import { Cities } from '.'

let cities

beforeEach(async () => {
  cities = await Cities.create({ name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cities.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cities.id)
    expect(view.name).toBe(cities.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cities.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cities.id)
    expect(view.name).toBe(cities.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
