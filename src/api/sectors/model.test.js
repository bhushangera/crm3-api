import { Sectors } from '.'

let sectors

beforeEach(async () => {
  sectors = await Sectors.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = sectors.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sectors.id)
    expect(view.code).toBe(sectors.code)
    expect(view.description).toBe(sectors.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = sectors.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sectors.id)
    expect(view.code).toBe(sectors.code)
    expect(view.description).toBe(sectors.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
