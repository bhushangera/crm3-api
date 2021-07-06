import { Regions } from '.'

let regions

beforeEach(async () => {
  regions = await Regions.create({ region: 'test', code: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = regions.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(regions.id)
    expect(view.region).toBe(regions.region)
    expect(view.code).toBe(regions.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = regions.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(regions.id)
    expect(view.region).toBe(regions.region)
    expect(view.code).toBe(regions.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
