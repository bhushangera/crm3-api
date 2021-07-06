import { CompanyPolicies } from '.'

let companyPolicies

beforeEach(async () => {
  companyPolicies = await CompanyPolicies.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = companyPolicies.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(companyPolicies.id)
    expect(view.code).toBe(companyPolicies.code)
    expect(view.description).toBe(companyPolicies.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = companyPolicies.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(companyPolicies.id)
    expect(view.code).toBe(companyPolicies.code)
    expect(view.description).toBe(companyPolicies.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
