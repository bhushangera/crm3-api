import { Integrations } from '.'

let integrations

beforeEach(async () => {
  integrations = await Integrations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = integrations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(integrations.id)
    expect(view.code).toBe(integrations.code)
    expect(view.description).toBe(integrations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = integrations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(integrations.id)
    expect(view.code).toBe(integrations.code)
    expect(view.description).toBe(integrations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
