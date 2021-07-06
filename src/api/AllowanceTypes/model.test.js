import { AllowanceTypes } from '.'

let allowanceTypes

beforeEach(async () => {
  allowanceTypes = await AllowanceTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = allowanceTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(allowanceTypes.id)
    expect(view.code).toBe(allowanceTypes.code)
    expect(view.description).toBe(allowanceTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = allowanceTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(allowanceTypes.id)
    expect(view.code).toBe(allowanceTypes.code)
    expect(view.description).toBe(allowanceTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
