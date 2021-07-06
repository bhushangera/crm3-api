import { FiscalYears } from '.'

let fiscalYears

beforeEach(async () => {
  fiscalYears = await FiscalYears.create({ code: 'test', description: 'test', startDate: 'test', endDate: 'test', active: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = fiscalYears.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fiscalYears.id)
    expect(view.code).toBe(fiscalYears.code)
    expect(view.description).toBe(fiscalYears.description)
    expect(view.startDate).toBe(fiscalYears.startDate)
    expect(view.endDate).toBe(fiscalYears.endDate)
    expect(view.active).toBe(fiscalYears.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = fiscalYears.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fiscalYears.id)
    expect(view.code).toBe(fiscalYears.code)
    expect(view.description).toBe(fiscalYears.description)
    expect(view.startDate).toBe(fiscalYears.startDate)
    expect(view.endDate).toBe(fiscalYears.endDate)
    expect(view.active).toBe(fiscalYears.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
