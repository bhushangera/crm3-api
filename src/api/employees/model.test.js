import { Employees } from '.'

let employees

beforeEach(async () => {
  employees = await Employees.create({ userId: 'test', title: 'test', name: 'test', lastname: 'test', email: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = employees.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(employees.id)
    expect(view.userId).toBe(employees.userId)
    expect(view.title).toBe(employees.title)
    expect(view.name).toBe(employees.name)
    expect(view.lastname).toBe(employees.lastname)
    expect(view.email).toBe(employees.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = employees.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(employees.id)
    expect(view.userId).toBe(employees.userId)
    expect(view.title).toBe(employees.title)
    expect(view.name).toBe(employees.name)
    expect(view.lastname).toBe(employees.lastname)
    expect(view.email).toBe(employees.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
