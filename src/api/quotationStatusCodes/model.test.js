import { QuotationStatusCodes } from '.'

let quotationStatusCodes

beforeEach(async () => {
  quotationStatusCodes = await QuotationStatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = quotationStatusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotationStatusCodes.id)
    expect(view.code).toBe(quotationStatusCodes.code)
    expect(view.description).toBe(quotationStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = quotationStatusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotationStatusCodes.id)
    expect(view.code).toBe(quotationStatusCodes.code)
    expect(view.description).toBe(quotationStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
