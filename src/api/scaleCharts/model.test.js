import { ScaleCharts } from '.'

let scaleCharts

beforeEach(async () => {
  scaleCharts = await ScaleCharts.create({ mm: 'test', in: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = scaleCharts.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(scaleCharts.id)
    expect(view.mm).toBe(scaleCharts.mm)
    expect(view.in).toBe(scaleCharts.in)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = scaleCharts.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(scaleCharts.id)
    expect(view.mm).toBe(scaleCharts.mm)
    expect(view.in).toBe(scaleCharts.in)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
