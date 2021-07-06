import { Saas } from '.'

let saas

beforeEach(async () => {
  saas = await Saas.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = saas.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(saas.id)
    expect(view.code).toBe(saas.code)
    expect(view.description).toBe(saas.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = saas.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(saas.id)
    expect(view.code).toBe(saas.code)
    expect(view.description).toBe(saas.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
