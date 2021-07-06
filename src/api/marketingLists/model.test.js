import { MarketingLists } from '.'

let marketingLists

beforeEach(async () => {
  marketingLists = await MarketingLists.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = marketingLists.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(marketingLists.id)
    expect(view.code).toBe(marketingLists.code)
    expect(view.description).toBe(marketingLists.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = marketingLists.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(marketingLists.id)
    expect(view.code).toBe(marketingLists.code)
    expect(view.description).toBe(marketingLists.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
