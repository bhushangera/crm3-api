import { Operations } from '.'

let operations

beforeEach(async () => {
  operations = await Operations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = operations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(operations.id)
    expect(view.code).toBe(operations.code)
    expect(view.description).toBe(operations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = operations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(operations.id)
    expect(view.code).toBe(operations.code)
    expect(view.description).toBe(operations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
