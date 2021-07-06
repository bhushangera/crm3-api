import { Webpages } from '.'

let webpages

beforeEach(async () => {
  webpages = await Webpages.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = webpages.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(webpages.id)
    expect(view.code).toBe(webpages.code)
    expect(view.description).toBe(webpages.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = webpages.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(webpages.id)
    expect(view.code).toBe(webpages.code)
    expect(view.description).toBe(webpages.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
