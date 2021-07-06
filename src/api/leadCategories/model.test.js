import { LeadCategories } from '.'

let leadCategories

beforeEach(async () => {
  leadCategories = await LeadCategories.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = leadCategories.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leadCategories.id)
    expect(view.code).toBe(leadCategories.code)
    expect(view.description).toBe(leadCategories.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = leadCategories.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leadCategories.id)
    expect(view.code).toBe(leadCategories.code)
    expect(view.description).toBe(leadCategories.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
