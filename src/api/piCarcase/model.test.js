import { PiCarcase } from '.'

let piCarcase

beforeEach(async () => {
  piCarcase = await PiCarcase.create({ piId: 'test', piArticleId: 'test', H: 'test', W: 'test', D: 'test', qty: 'test', sqft: 'test', rate: 'test', gst: 'test', amt: 'test', tAmt: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piCarcase.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piCarcase.id)
    expect(view.piId).toBe(piCarcase.piId)
    expect(view.piArticleId).toBe(piCarcase.piArticleId)
    expect(view.H).toBe(piCarcase.H)
    expect(view.W).toBe(piCarcase.W)
    expect(view.D).toBe(piCarcase.D)
    expect(view.qty).toBe(piCarcase.qty)
    expect(view.sqft).toBe(piCarcase.sqft)
    expect(view.rate).toBe(piCarcase.rate)
    expect(view.gst).toBe(piCarcase.gst)
    expect(view.amt).toBe(piCarcase.amt)
    expect(view.tAmt).toBe(piCarcase.tAmt)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piCarcase.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piCarcase.id)
    expect(view.piId).toBe(piCarcase.piId)
    expect(view.piArticleId).toBe(piCarcase.piArticleId)
    expect(view.H).toBe(piCarcase.H)
    expect(view.W).toBe(piCarcase.W)
    expect(view.D).toBe(piCarcase.D)
    expect(view.qty).toBe(piCarcase.qty)
    expect(view.sqft).toBe(piCarcase.sqft)
    expect(view.rate).toBe(piCarcase.rate)
    expect(view.gst).toBe(piCarcase.gst)
    expect(view.amt).toBe(piCarcase.amt)
    expect(view.tAmt).toBe(piCarcase.tAmt)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
