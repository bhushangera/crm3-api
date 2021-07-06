import { AccountingPeriods } from '.'

let accountingPeriods

beforeEach(async () => {
  accountingPeriods = await AccountingPeriods.create({ code: 'test', startDate: 'test', endDate: 'test', active: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = accountingPeriods.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accountingPeriods.id)
    expect(view.code).toBe(accountingPeriods.code)
    expect(view.startDate).toBe(accountingPeriods.startDate)
    expect(view.endDate).toBe(accountingPeriods.endDate)
    expect(view.active).toBe(accountingPeriods.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = accountingPeriods.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(accountingPeriods.id)
    expect(view.code).toBe(accountingPeriods.code)
    expect(view.startDate).toBe(accountingPeriods.startDate)
    expect(view.endDate).toBe(accountingPeriods.endDate)
    expect(view.active).toBe(accountingPeriods.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
