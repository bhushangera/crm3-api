import { Icons } from '.'

let icons

beforeEach(async () => {
  icons = await Icons.create({ class: 'test', label: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = icons.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(icons.id)
    expect(view.class).toBe(icons.class)
    expect(view.label).toBe(icons.label)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = icons.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(icons.id)
    expect(view.class).toBe(icons.class)
    expect(view.label).toBe(icons.label)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
