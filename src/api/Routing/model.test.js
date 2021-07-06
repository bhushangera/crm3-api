import { Routing } from '.'

let routing

beforeEach(async () => {
  routing = await Routing.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = routing.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(routing.id)
    expect(view.code).toBe(routing.code)
    expect(view.description).toBe(routing.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = routing.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(routing.id)
    expect(view.code).toBe(routing.code)
    expect(view.description).toBe(routing.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
