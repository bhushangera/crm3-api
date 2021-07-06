import { Subscription } from '.'

let subscription

beforeEach(async () => {
  subscription = await Subscription.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = subscription.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(subscription.id)
    expect(view.code).toBe(subscription.code)
    expect(view.description).toBe(subscription.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = subscription.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(subscription.id)
    expect(view.code).toBe(subscription.code)
    expect(view.description).toBe(subscription.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
