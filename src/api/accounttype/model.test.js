import { Accounttype } from '.'

let accounttype

beforeEach(async () => {
  accounttype = await Accounttype.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = accounttype.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accounttype.id)
    expect(view.code).toBe(accounttype.code)
    expect(view.description).toBe(accounttype.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = accounttype.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accounttype.id)
    expect(view.code).toBe(accounttype.code)
    expect(view.description).toBe(accounttype.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
