import { SupplierQuotations } from '.'

let supplierQuotations

beforeEach(async () => {
  supplierQuotations = await SupplierQuotations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = supplierQuotations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(supplierQuotations.id)
    expect(view.code).toBe(supplierQuotations.code)
    expect(view.description).toBe(supplierQuotations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = supplierQuotations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(supplierQuotations.id)
    expect(view.code).toBe(supplierQuotations.code)
    expect(view.description).toBe(supplierQuotations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
