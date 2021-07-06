import { StockEntry } from '.'

let stockEntry

beforeEach(async () => {
  stockEntry = await StockEntry.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = stockEntry.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(stockEntry.id)
    expect(view.code).toBe(stockEntry.code)
    expect(view.description).toBe(stockEntry.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = stockEntry.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(stockEntry.id)
    expect(view.code).toBe(stockEntry.code)
    expect(view.description).toBe(stockEntry.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
