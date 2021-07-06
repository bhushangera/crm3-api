import { UserPermissions } from '.'

let userPermissions

beforeEach(async () => {
  userPermissions = await UserPermissions.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = userPermissions.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userPermissions.id)
    expect(view.code).toBe(userPermissions.code)
    expect(view.description).toBe(userPermissions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = userPermissions.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userPermissions.id)
    expect(view.code).toBe(userPermissions.code)
    expect(view.description).toBe(userPermissions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
