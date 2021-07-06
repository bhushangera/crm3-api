import { Accountingquarters } from '.'

let accountingquarters

beforeEach(async () => {
  accountingquarters = await Accountingquarters.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = accountingquarters.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accountingquarters.id)
    expect(view.code).toBe(accountingquarters.code)
    expect(view.description).toBe(accountingquarters.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = accountingquarters.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accountingquarters.id)
    expect(view.code).toBe(accountingquarters.code)
    expect(view.description).toBe(accountingquarters.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
