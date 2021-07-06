import { PiStatusCodes } from '.'

let piStatusCodes

beforeEach(async () => {
  piStatusCodes = await PiStatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piStatusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piStatusCodes.id)
    expect(view.code).toBe(piStatusCodes.code)
    expect(view.description).toBe(piStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piStatusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piStatusCodes.id)
    expect(view.code).toBe(piStatusCodes.code)
    expect(view.description).toBe(piStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
