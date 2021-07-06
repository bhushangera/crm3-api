import { PiCivil } from '.'

let piCivil

beforeEach(async () => {
  piCivil = await PiCivil.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piCivil.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piCivil.id)
    expect(view.code).toBe(piCivil.code)
    expect(view.description).toBe(piCivil.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piCivil.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piCivil.id)
    expect(view.code).toBe(piCivil.code)
    expect(view.description).toBe(piCivil.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
