import { Customersegments } from '.'

let customersegments

beforeEach(async () => {
  customersegments = await Customersegments.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = customersegments.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(customersegments.id)
    expect(view.code).toBe(customersegments.code)
    expect(view.description).toBe(customersegments.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = customersegments.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(customersegments.id)
    expect(view.code).toBe(customersegments.code)
    expect(view.description).toBe(customersegments.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
