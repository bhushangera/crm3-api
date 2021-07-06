import { Company } from '.'

let company

beforeEach(async () => {
  company = await Company.create({})
})

describe('view', () => {
  it('returns simple view', () => {
    const view = company.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(company.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = company.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(company.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
