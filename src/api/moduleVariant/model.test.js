import { ModuleVariant } from '.'

let moduleVariant

beforeEach(async () => {
  moduleVariant = await ModuleVariant.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = moduleVariant.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(moduleVariant.id)
    expect(view.code).toBe(moduleVariant.code)
    expect(view.description).toBe(moduleVariant.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = moduleVariant.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(moduleVariant.id)
    expect(view.code).toBe(moduleVariant.code)
    expect(view.description).toBe(moduleVariant.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
