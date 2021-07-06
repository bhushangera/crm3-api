import { Ifsc } from '.'

let ifsc

beforeEach(async () => {
  ifsc = await Ifsc.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ifsc.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ifsc.id)
    expect(view.code).toBe(ifsc.code)
    expect(view.description).toBe(ifsc.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ifsc.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ifsc.id)
    expect(view.code).toBe(ifsc.code)
    expect(view.description).toBe(ifsc.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
