import { Salutations } from '.'

let salutations

beforeEach(async () => {
  salutations = await Salutations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = salutations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salutations.id)
    expect(view.code).toBe(salutations.code)
    expect(view.description).toBe(salutations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = salutations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salutations.id)
    expect(view.code).toBe(salutations.code)
    expect(view.description).toBe(salutations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
