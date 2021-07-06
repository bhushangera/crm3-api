import { ShadeSwatches } from '.'

let shadeSwatches

beforeEach(async () => {
  shadeSwatches = await ShadeSwatches.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = shadeSwatches.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shadeSwatches.id)
    expect(view.code).toBe(shadeSwatches.code)
    expect(view.description).toBe(shadeSwatches.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = shadeSwatches.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shadeSwatches.id)
    expect(view.code).toBe(shadeSwatches.code)
    expect(view.description).toBe(shadeSwatches.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
