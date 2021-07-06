import { PerformanceRating } from '.'

let performanceRating

beforeEach(async () => {
  performanceRating = await PerformanceRating.create({ stars: 'test', rating: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = performanceRating.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(performanceRating.id)
    expect(view.stars).toBe(performanceRating.stars)
    expect(view.rating).toBe(performanceRating.rating)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = performanceRating.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(performanceRating.id)
    expect(view.stars).toBe(performanceRating.stars)
    expect(view.rating).toBe(performanceRating.rating)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
