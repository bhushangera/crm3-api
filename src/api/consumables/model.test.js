import { Consumables } from '.'

let consumables

beforeEach(async () => {
  consumables = await Consumables.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = consumables.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(consumables.id)
    expect(view.code).toBe(consumables.code)
    expect(view.description).toBe(consumables.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = consumables.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(consumables.id)
    expect(view.code).toBe(consumables.code)
    expect(view.description).toBe(consumables.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
