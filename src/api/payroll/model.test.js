import { Payroll } from '.'

let payroll

beforeEach(async () => {
  payroll = await Payroll.create({ fiscalYear: 'test', month: 'test', payrollDate: 'test', totalBasic: 'test', totalEpf: 'test', totalAllowance: 'test', totalCTC: 'test', totalRecovery: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = payroll.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(payroll.id)
    expect(view.fiscalYear).toBe(payroll.fiscalYear)
    expect(view.month).toBe(payroll.month)
    expect(view.payrollDate).toBe(payroll.payrollDate)
    expect(view.totalBasic).toBe(payroll.totalBasic)
    expect(view.totalEpf).toBe(payroll.totalEpf)
    expect(view.totalAllowance).toBe(payroll.totalAllowance)
    expect(view.totalCTC).toBe(payroll.totalCTC)
    expect(view.totalRecovery).toBe(payroll.totalRecovery)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = payroll.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(payroll.id)
    expect(view.fiscalYear).toBe(payroll.fiscalYear)
    expect(view.month).toBe(payroll.month)
    expect(view.payrollDate).toBe(payroll.payrollDate)
    expect(view.totalBasic).toBe(payroll.totalBasic)
    expect(view.totalEpf).toBe(payroll.totalEpf)
    expect(view.totalAllowance).toBe(payroll.totalAllowance)
    expect(view.totalCTC).toBe(payroll.totalCTC)
    expect(view.totalRecovery).toBe(payroll.totalRecovery)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
