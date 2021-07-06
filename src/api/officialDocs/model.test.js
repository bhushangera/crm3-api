import { OfficialDocs } from '.'

let officialDocs

beforeEach(async () => {
  officialDocs = await OfficialDocs.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = officialDocs.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(officialDocs.id)
    expect(view.code).toBe(officialDocs.code)
    expect(view.description).toBe(officialDocs.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = officialDocs.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(officialDocs.id)
    expect(view.code).toBe(officialDocs.code)
    expect(view.description).toBe(officialDocs.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
