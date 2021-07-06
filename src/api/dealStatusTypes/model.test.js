import { DealStatusTypes } from '.'

let dealStatusTypes

beforeEach(async () => {
  dealStatusTypes = await DealStatusTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = dealStatusTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dealStatusTypes.id)
    expect(view.code).toBe(dealStatusTypes.code)
    expect(view.description).toBe(dealStatusTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = dealStatusTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dealStatusTypes.id)
    expect(view.code).toBe(dealStatusTypes.code)
    expect(view.description).toBe(dealStatusTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
