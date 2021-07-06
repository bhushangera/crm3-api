import { StatusReasons } from '.'

let statusReasons

beforeEach(async () => {
  statusReasons = await StatusReasons.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = statusReasons.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(statusReasons.id)
    expect(view.code).toBe(statusReasons.code)
    expect(view.description).toBe(statusReasons.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = statusReasons.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(statusReasons.id)
    expect(view.code).toBe(statusReasons.code)
    expect(view.description).toBe(statusReasons.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
