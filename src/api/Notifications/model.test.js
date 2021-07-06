import { Notifications } from '.'

let notifications

beforeEach(async () => {
  notifications = await Notifications.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = notifications.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(notifications.id)
    expect(view.code).toBe(notifications.code)
    expect(view.description).toBe(notifications.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = notifications.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(notifications.id)
    expect(view.code).toBe(notifications.code)
    expect(view.description).toBe(notifications.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
