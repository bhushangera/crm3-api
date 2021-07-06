import { QuotationScroll } from '.'

let quotationScroll

beforeEach(async () => {
  quotationScroll = await QuotationScroll.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = quotationScroll.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotationScroll.id)
    expect(view.code).toBe(quotationScroll.code)
    expect(view.description).toBe(quotationScroll.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = quotationScroll.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotationScroll.id)
    expect(view.code).toBe(quotationScroll.code)
    expect(view.description).toBe(quotationScroll.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
