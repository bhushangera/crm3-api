import { WebsiteSettings } from '.'

let websiteSettings

beforeEach(async () => {
  websiteSettings = await WebsiteSettings.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = websiteSettings.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(websiteSettings.id)
    expect(view.code).toBe(websiteSettings.code)
    expect(view.description).toBe(websiteSettings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = websiteSettings.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(websiteSettings.id)
    expect(view.code).toBe(websiteSettings.code)
    expect(view.description).toBe(websiteSettings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
