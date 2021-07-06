import { Wastage } from '.'

let wastage

beforeEach(async () => {
  wastage = await Wastage.create({ carcase: 'test', shutter: 'test', back: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = wastage.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(wastage.id)
    expect(view.carcase).toBe(wastage.carcase)
    expect(view.shutter).toBe(wastage.shutter)
    expect(view.back).toBe(wastage.back)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = wastage.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(wastage.id)
    expect(view.carcase).toBe(wastage.carcase)
    expect(view.shutter).toBe(wastage.shutter)
    expect(view.back).toBe(wastage.back)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
