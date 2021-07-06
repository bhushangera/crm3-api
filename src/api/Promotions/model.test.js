import { Promotions } from '.'

let promotions

beforeEach(async () => {
  promotions = await Promotions.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = promotions.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(promotions.id)
    expect(view.code).toBe(promotions.code)
    expect(view.description).toBe(promotions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = promotions.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(promotions.id)
    expect(view.code).toBe(promotions.code)
    expect(view.description).toBe(promotions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
