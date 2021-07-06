import { Dashboards } from '.'

let dashboards

beforeEach(async () => {
  dashboards = await Dashboards.create({ code: 'test', description: 'test', path: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = dashboards.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dashboards.id)
    expect(view.code).toBe(dashboards.code)
    expect(view.description).toBe(dashboards.description)
    expect(view.path).toBe(dashboards.path)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = dashboards.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dashboards.id)
    expect(view.code).toBe(dashboards.code)
    expect(view.description).toBe(dashboards.description)
    expect(view.path).toBe(dashboards.path)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
