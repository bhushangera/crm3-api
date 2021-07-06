import { EmployeePerformance } from '.'

let employeePerformance

beforeEach(async () => {
  employeePerformance = await EmployeePerformance.create({ partyId: 'test', partyName: 'test', managerId: 'test', managerName: 'test', approoved: 'test', approovedBy: 'test', fiscalYear: 'test', presents: 'test', leaves: 'test', : 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = employeePerformance.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(employeePerformance.id)
    expect(view.partyId).toBe(employeePerformance.partyId)
    expect(view.partyName).toBe(employeePerformance.partyName)
    expect(view.managerId).toBe(employeePerformance.managerId)
    expect(view.managerName).toBe(employeePerformance.managerName)
    expect(view.approoved).toBe(employeePerformance.approoved)
    expect(view.approovedBy).toBe(employeePerformance.approovedBy)
    expect(view.fiscalYear).toBe(employeePerformance.fiscalYear)
    expect(view.presents).toBe(employeePerformance.presents)
    expect(view.leaves).toBe(employeePerformance.leaves)
    expect(view.).toBe(employeePerformance.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = employeePerformance.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(employeePerformance.id)
    expect(view.partyId).toBe(employeePerformance.partyId)
    expect(view.partyName).toBe(employeePerformance.partyName)
    expect(view.managerId).toBe(employeePerformance.managerId)
    expect(view.managerName).toBe(employeePerformance.managerName)
    expect(view.approoved).toBe(employeePerformance.approoved)
    expect(view.approovedBy).toBe(employeePerformance.approovedBy)
    expect(view.fiscalYear).toBe(employeePerformance.fiscalYear)
    expect(view.presents).toBe(employeePerformance.presents)
    expect(view.leaves).toBe(employeePerformance.leaves)
    expect(view.).toBe(employeePerformance.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
