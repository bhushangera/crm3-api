import { Counters } from '.'

let counters

beforeEach(async () => {
  counters = await Counters.create({ code: 'test', prefix: 'test', description: 'test', start: 'test', active: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = counters.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(counters.id)
    expect(view.code).toBe(counters.code)
    expect(view.prefix).toBe(counters.prefix)
    expect(view.description).toBe(counters.description)
    expect(view.start).toBe(counters.start)
    expect(view.active).toBe(counters.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = counters.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(counters.id)
    expect(view.code).toBe(counters.code)
    expect(view.prefix).toBe(counters.prefix)
    expect(view.description).toBe(counters.description)
    expect(view.start).toBe(counters.start)
    expect(view.active).toBe(counters.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
