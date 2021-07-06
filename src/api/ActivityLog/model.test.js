import { ActivityLog } from '.'

let activityLog

beforeEach(async () => {
  activityLog = await ActivityLog.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = activityLog.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(activityLog.id)
    expect(view.code).toBe(activityLog.code)
    expect(view.description).toBe(activityLog.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = activityLog.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(activityLog.id)
    expect(view.code).toBe(activityLog.code)
    expect(view.description).toBe(activityLog.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
