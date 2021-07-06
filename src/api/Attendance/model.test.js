import { Attendance } from '.'

let attendance

beforeEach(async () => {
  attendance = await Attendance.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = attendance.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(attendance.id)
    expect(view.code).toBe(attendance.code)
    expect(view.description).toBe(attendance.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = attendance.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(attendance.id)
    expect(view.code).toBe(attendance.code)
    expect(view.description).toBe(attendance.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
