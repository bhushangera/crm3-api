import { AttendanceRequest } from '.'

let attendanceRequest

beforeEach(async () => {
  attendanceRequest = await AttendanceRequest.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = attendanceRequest.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(attendanceRequest.id)
    expect(view.code).toBe(attendanceRequest.code)
    expect(view.description).toBe(attendanceRequest.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = attendanceRequest.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(attendanceRequest.id)
    expect(view.code).toBe(attendanceRequest.code)
    expect(view.description).toBe(attendanceRequest.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
