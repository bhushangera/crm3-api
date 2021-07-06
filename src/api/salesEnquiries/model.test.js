import { SalesEnquiries } from '.'

let salesEnquiries

beforeEach(async () => {
  salesEnquiries = await SalesEnquiries.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = salesEnquiries.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salesEnquiries.id)
    expect(view.code).toBe(salesEnquiries.code)
    expect(view.description).toBe(salesEnquiries.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = salesEnquiries.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salesEnquiries.id)
    expect(view.code).toBe(salesEnquiries.code)
    expect(view.description).toBe(salesEnquiries.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
