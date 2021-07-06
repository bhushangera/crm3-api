import { LoginTracker } from '.'

let loginTracker

beforeEach(async () => {
  loginTracker = await LoginTracker.create({ code: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = loginTracker.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(loginTracker.id)
    expect(view.code).toBe(loginTracker.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = loginTracker.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(loginTracker.id)
    expect(view.code).toBe(loginTracker.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
