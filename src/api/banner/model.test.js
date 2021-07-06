import { Banner } from '.'

let banner

beforeEach(async () => {
  banner = await Banner.create({ image: 'test', text1: 'test', text2: 'test', btnLink: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = banner.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(banner.id)
    expect(view.image).toBe(banner.image)
    expect(view.text1).toBe(banner.text1)
    expect(view.text2).toBe(banner.text2)
    expect(view.btnLink).toBe(banner.btnLink)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = banner.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(banner.id)
    expect(view.image).toBe(banner.image)
    expect(view.text1).toBe(banner.text1)
    expect(view.text2).toBe(banner.text2)
    expect(view.btnLink).toBe(banner.btnLink)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
