import { UserTokens } from '.'

let userTokens

beforeEach(async () => {
  userTokens = await UserTokens.create({ userId: 'test', token: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = userTokens.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userTokens.id)
    expect(view.userId).toBe(userTokens.userId)
    expect(view.token).toBe(userTokens.token)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = userTokens.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userTokens.id)
    expect(view.userId).toBe(userTokens.userId)
    expect(view.token).toBe(userTokens.token)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
