import { Tenders } from '.'

let tenders

beforeEach(async () => {
  tenders = await Tenders.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tenders.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tenders.id)
    expect(view.code).toBe(tenders.code)
    expect(view.description).toBe(tenders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tenders.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tenders.id)
    expect(view.code).toBe(tenders.code)
    expect(view.description).toBe(tenders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
