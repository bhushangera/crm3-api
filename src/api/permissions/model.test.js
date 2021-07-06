import { Permissions } from '.'

let permissions

beforeEach(async () => {
  permissions = await Permissions.create({ title: 'test', level: 'test', parentId: 'test', isSelected: 'test', name: 'test', children: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = permissions.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(permissions.id)
    expect(view.title).toBe(permissions.title)
    expect(view.level).toBe(permissions.level)
    expect(view.parentId).toBe(permissions.parentId)
    expect(view.isSelected).toBe(permissions.isSelected)
    expect(view.name).toBe(permissions.name)
    expect(view.children).toBe(permissions.children)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = permissions.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(permissions.id)
    expect(view.title).toBe(permissions.title)
    expect(view.level).toBe(permissions.level)
    expect(view.parentId).toBe(permissions.parentId)
    expect(view.isSelected).toBe(permissions.isSelected)
    expect(view.name).toBe(permissions.name)
    expect(view.children).toBe(permissions.children)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
