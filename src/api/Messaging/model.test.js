import { Messaging } from '.'

let messaging

beforeEach(async () => {
  messaging = await Messaging.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = messaging.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(messaging.id)
    expect(view.code).toBe(messaging.code)
    expect(view.description).toBe(messaging.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = messaging.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(messaging.id)
    expect(view.code).toBe(messaging.code)
    expect(view.description).toBe(messaging.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
