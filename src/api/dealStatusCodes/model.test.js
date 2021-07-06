import { DealStatusCodes } from '.'

let dealStatusCodes

beforeEach(async () => {
  dealStatusCodes = await DealStatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = dealStatusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dealStatusCodes.id)
    expect(view.code).toBe(dealStatusCodes.code)
    expect(view.description).toBe(dealStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = dealStatusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dealStatusCodes.id)
    expect(view.code).toBe(dealStatusCodes.code)
    expect(view.description).toBe(dealStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
