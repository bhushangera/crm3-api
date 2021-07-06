import { Resignations } from '.'

let resignations

beforeEach(async () => {
  resignations = await Resignations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = resignations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resignations.id)
    expect(view.code).toBe(resignations.code)
    expect(view.description).toBe(resignations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = resignations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resignations.id)
    expect(view.code).toBe(resignations.code)
    expect(view.description).toBe(resignations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
