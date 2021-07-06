import { Account } from '.'

let account

beforeEach(async () => {
  account = await Account.create({ accountTypeId: 'test', accountType: 'test', code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = account.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(account.id)
    expect(view.accountTypeId).toBe(account.accountTypeId)
    expect(view.accountType).toBe(account.accountType)
    expect(view.code).toBe(account.code)
    expect(view.description).toBe(account.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = account.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(account.id)
    expect(view.accountTypeId).toBe(account.accountTypeId)
    expect(view.accountType).toBe(account.accountType)
    expect(view.code).toBe(account.code)
    expect(view.description).toBe(account.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
