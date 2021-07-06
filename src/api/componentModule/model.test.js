import { ComponentModule } from '.'

let componentModule

beforeEach(async () => {
  componentModule = await ComponentModule.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = componentModule.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(componentModule.id)
    expect(view.code).toBe(componentModule.code)
    expect(view.description).toBe(componentModule.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = componentModule.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(componentModule.id)
    expect(view.code).toBe(componentModule.code)
    expect(view.description).toBe(componentModule.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
