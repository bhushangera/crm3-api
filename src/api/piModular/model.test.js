import { PiModular } from '.'

let piModular

beforeEach(async () => {
  piModular = await PiModular.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piModular.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piModular.id)
    expect(view.code).toBe(piModular.code)
    expect(view.description).toBe(piModular.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piModular.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piModular.id)
    expect(view.code).toBe(piModular.code)
    expect(view.description).toBe(piModular.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
