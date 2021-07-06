import { QuotationRequest } from '.'

let quotationRequest

beforeEach(async () => {
  quotationRequest = await QuotationRequest.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = quotationRequest.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotationRequest.id)
    expect(view.code).toBe(quotationRequest.code)
    expect(view.description).toBe(quotationRequest.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = quotationRequest.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quotationRequest.id)
    expect(view.code).toBe(quotationRequest.code)
    expect(view.description).toBe(quotationRequest.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
