import { Quotations } from '.'

let quotations

beforeEach(async () => {
  quotations = await Quotations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = quotations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotations.id)
    expect(view.code).toBe(quotations.code)
    expect(view.description).toBe(quotations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = quotations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotations.id)
    expect(view.code).toBe(quotations.code)
    expect(view.description).toBe(quotations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
