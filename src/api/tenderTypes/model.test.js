import { TenderTypes } from '.'

let tenderTypes

beforeEach(async () => {
  tenderTypes = await TenderTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tenderTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tenderTypes.id)
    expect(view.code).toBe(tenderTypes.code)
    expect(view.description).toBe(tenderTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tenderTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tenderTypes.id)
    expect(view.code).toBe(tenderTypes.code)
    expect(view.description).toBe(tenderTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
