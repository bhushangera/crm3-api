import { Accountingdimensions } from '.'

let accountingdimensions

beforeEach(async () => {
  accountingdimensions = await Accountingdimensions.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = accountingdimensions.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accountingdimensions.id)
    expect(view.code).toBe(accountingdimensions.code)
    expect(view.description).toBe(accountingdimensions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = accountingdimensions.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accountingdimensions.id)
    expect(view.code).toBe(accountingdimensions.code)
    expect(view.description).toBe(accountingdimensions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
