import { PiShutter } from '.'

let piShutter

beforeEach(async () => {
  piShutter = await PiShutter.create({ code: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piShutter.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piShutter.id)
    expect(view.code).toBe(piShutter.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piShutter.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piShutter.id)
    expect(view.code).toBe(piShutter.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
