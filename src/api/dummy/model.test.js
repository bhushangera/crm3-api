import { Dummy } from '.'

let dummy

beforeEach(async () => {
  dummy = await Dummy.create({ first: 'test', second: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = dummy.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dummy.id)
    expect(view.first).toBe(dummy.first)
    expect(view.second).toBe(dummy.second)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = dummy.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dummy.id)
    expect(view.first).toBe(dummy.first)
    expect(view.second).toBe(dummy.second)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
