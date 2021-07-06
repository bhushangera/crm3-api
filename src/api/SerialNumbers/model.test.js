import { SerialNumbers } from '.'

let serialNumbers

beforeEach(async () => {
  serialNumbers = await SerialNumbers.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = serialNumbers.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(serialNumbers.id)
    expect(view.code).toBe(serialNumbers.code)
    expect(view.description).toBe(serialNumbers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = serialNumbers.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(serialNumbers.id)
    expect(view.code).toBe(serialNumbers.code)
    expect(view.description).toBe(serialNumbers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
