import { Roles } from '.'

let roles

beforeEach(async () => {
  roles = await Roles.create({ title: 'test', permissions: 'test', isCoreRole: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = roles.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(roles.id)
    expect(view.title).toBe(roles.title)
    expect(view.permissions).toBe(roles.permissions)
    expect(view.isCoreRole).toBe(roles.isCoreRole)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = roles.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(roles.id)
    expect(view.title).toBe(roles.title)
    expect(view.permissions).toBe(roles.permissions)
    expect(view.isCoreRole).toBe(roles.isCoreRole)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
