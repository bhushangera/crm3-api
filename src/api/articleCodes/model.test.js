import { ArticleCodes } from '.'

let articleCodes

beforeEach(async () => {
  articleCodes = await ArticleCodes.create({ seriesArticleId: 'test', articleCode: 'test', articleNo: 'test', image: 'test', isActive: 'test', slug: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = articleCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(articleCodes.id)
    expect(view.seriesArticleId).toBe(articleCodes.seriesArticleId)
    expect(view.articleCode).toBe(articleCodes.articleCode)
    expect(view.articleNo).toBe(articleCodes.articleNo)
    expect(view.image).toBe(articleCodes.image)
    expect(view.isActive).toBe(articleCodes.isActive)
    expect(view.slug).toBe(articleCodes.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = articleCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(articleCodes.id)
    expect(view.seriesArticleId).toBe(articleCodes.seriesArticleId)
    expect(view.articleCode).toBe(articleCodes.articleCode)
    expect(view.articleNo).toBe(articleCodes.articleNo)
    expect(view.image).toBe(articleCodes.image)
    expect(view.isActive).toBe(articleCodes.isActive)
    expect(view.slug).toBe(articleCodes.slug)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
