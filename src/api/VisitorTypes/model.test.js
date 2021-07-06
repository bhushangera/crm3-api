import { VisitorTypes } from '.'

let visitorTypes

beforeEach(async () => {
  visitorTypes = await VisitorTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = visitorTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(visitorTypes.id)
    expect(view.code).toBe(visitorTypes.code)
    expect(view.description).toBe(visitorTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = visitorTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(visitorTypes.id)
    expect(view.code).toBe(visitorTypes.code)
    expect(view.description).toBe(visitorTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
