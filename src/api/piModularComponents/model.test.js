import { PiModularComponents } from '.'

let piModularComponents

beforeEach(async () => {
  piModularComponents = await PiModularComponents.create({ id: 'test', code: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piModularComponents.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piModularComponents.id)
    expect(view.id).toBe(piModularComponents.id)
    expect(view.code).toBe(piModularComponents.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piModularComponents.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piModularComponents.id)
    expect(view.id).toBe(piModularComponents.id)
    expect(view.code).toBe(piModularComponents.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
