import { PerformanceIndicators } from '.'

let performanceIndicators

beforeEach(async () => {
  performanceIndicators = await PerformanceIndicators.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = performanceIndicators.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(performanceIndicators.id)
    expect(view.code).toBe(performanceIndicators.code)
    expect(view.description).toBe(performanceIndicators.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = performanceIndicators.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(performanceIndicators.id)
    expect(view.code).toBe(performanceIndicators.code)
    expect(view.description).toBe(performanceIndicators.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
