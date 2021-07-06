import { BatchNumbers } from '.'

let batchNumbers

beforeEach(async () => {
  batchNumbers = await BatchNumbers.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = batchNumbers.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(batchNumbers.id)
    expect(view.code).toBe(batchNumbers.code)
    expect(view.description).toBe(batchNumbers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = batchNumbers.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(batchNumbers.id)
    expect(view.code).toBe(batchNumbers.code)
    expect(view.description).toBe(batchNumbers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
