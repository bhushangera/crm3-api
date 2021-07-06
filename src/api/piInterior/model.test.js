import { PiInterior } from '.'

let piInterior

beforeEach(async () => {
  piInterior = await PiInterior.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piInterior.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piInterior.id)
    expect(view.code).toBe(piInterior.code)
    expect(view.description).toBe(piInterior.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piInterior.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piInterior.id)
    expect(view.code).toBe(piInterior.code)
    expect(view.description).toBe(piInterior.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
