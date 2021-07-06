import { Colors } from '.'

let colors

beforeEach(async () => {
  colors = await Colors.create({ code: 'test', background: 'test', foreground: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = colors.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(colors.id)
    expect(view.code).toBe(colors.code)
    expect(view.background).toBe(colors.background)
    expect(view.foreground).toBe(colors.foreground)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = colors.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(colors.id)
    expect(view.code).toBe(colors.code)
    expect(view.background).toBe(colors.background)
    expect(view.foreground).toBe(colors.foreground)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
