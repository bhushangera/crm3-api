import { Hwpack } from '.'

let hwpack

beforeEach(async () => {
  hwpack = await Hwpack.create({ articleId: 'test', hwMId: 'test', hwArticleId: 'test', hwBrandId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = hwpack.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hwpack.id)
    expect(view.articleId).toBe(hwpack.articleId)
    expect(view.hwMId).toBe(hwpack.hwMId)
    expect(view.hwArticleId).toBe(hwpack.hwArticleId)
    expect(view.hwBrandId).toBe(hwpack.hwBrandId)
    expect(view.skuId).toBe(hwpack.skuId)
    expect(view.skuDNo).toBe(hwpack.skuDNo)
    expect(view.skuDName).toBe(hwpack.skuDName)
    expect(view.skuUnit).toBe(hwpack.skuUnit)
    expect(view.skuImage).toBe(hwpack.skuImage)
    expect(view.skuMakeImage).toBe(hwpack.skuMakeImage)
    expect(view.skuMake).toBe(hwpack.skuMake)
    expect(view.skuSeries).toBe(hwpack.skuSeries)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = hwpack.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hwpack.id)
    expect(view.articleId).toBe(hwpack.articleId)
    expect(view.hwMId).toBe(hwpack.hwMId)
    expect(view.hwArticleId).toBe(hwpack.hwArticleId)
    expect(view.hwBrandId).toBe(hwpack.hwBrandId)
    expect(view.skuId).toBe(hwpack.skuId)
    expect(view.skuDNo).toBe(hwpack.skuDNo)
    expect(view.skuDName).toBe(hwpack.skuDName)
    expect(view.skuUnit).toBe(hwpack.skuUnit)
    expect(view.skuImage).toBe(hwpack.skuImage)
    expect(view.skuMakeImage).toBe(hwpack.skuMakeImage)
    expect(view.skuMake).toBe(hwpack.skuMake)
    expect(view.skuSeries).toBe(hwpack.skuSeries)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
