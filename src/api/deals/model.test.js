import { Deals } from '.'

let deals

beforeEach(async () => {
  deals = await Deals.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = deals.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(deals.id)
    expect(view.code).toBe(deals.code)
    expect(view.description).toBe(deals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = deals.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(deals.id)
    expect(view.code).toBe(deals.code)
    expect(view.description).toBe(deals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
