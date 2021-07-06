import { PageTags } from '.'

let pageTags

beforeEach(async () => {
  pageTags = await PageTags.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = pageTags.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pageTags.id)
    expect(view.code).toBe(pageTags.code)
    expect(view.description).toBe(pageTags.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = pageTags.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pageTags.id)
    expect(view.code).toBe(pageTags.code)
    expect(view.description).toBe(pageTags.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
