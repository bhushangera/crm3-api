import { Warehouse } from '.'

let warehouse

beforeEach(async () => {
  warehouse = await Warehouse.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = warehouse.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(warehouse.id)
    expect(view.code).toBe(warehouse.code)
    expect(view.description).toBe(warehouse.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = warehouse.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(warehouse.id)
    expect(view.code).toBe(warehouse.code)
    expect(view.description).toBe(warehouse.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
