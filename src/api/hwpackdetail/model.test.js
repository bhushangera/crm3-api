import { Hwpackdetail } from '.'

let hwpackdetail

beforeEach(async () => {
  hwpackdetail = await Hwpackdetail.create({ hwPackId: 'test', hwPackCode: 'test', hwMId: 'test', hwArticleId: 'test', hwMakeId: 'test', skuId: 'test', skuDNo: 'test', skuDName: 'test', skuUnit: 'test', skuImage: 'test', skuMakeImage: 'test', skuMake: 'test', skuSeries: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = hwpackdetail.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hwpackdetail.id)
    expect(view.hwPackId).toBe(hwpackdetail.hwPackId)
    expect(view.hwPackCode).toBe(hwpackdetail.hwPackCode)
    expect(view.hwMId).toBe(hwpackdetail.hwMId)
    expect(view.hwArticleId).toBe(hwpackdetail.hwArticleId)
    expect(view.hwMakeId).toBe(hwpackdetail.hwMakeId)
    expect(view.skuId).toBe(hwpackdetail.skuId)
    expect(view.skuDNo).toBe(hwpackdetail.skuDNo)
    expect(view.skuDName).toBe(hwpackdetail.skuDName)
    expect(view.skuUnit).toBe(hwpackdetail.skuUnit)
    expect(view.skuImage).toBe(hwpackdetail.skuImage)
    expect(view.skuMakeImage).toBe(hwpackdetail.skuMakeImage)
    expect(view.skuMake).toBe(hwpackdetail.skuMake)
    expect(view.skuSeries).toBe(hwpackdetail.skuSeries)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = hwpackdetail.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hwpackdetail.id)
    expect(view.hwPackId).toBe(hwpackdetail.hwPackId)
    expect(view.hwPackCode).toBe(hwpackdetail.hwPackCode)
    expect(view.hwMId).toBe(hwpackdetail.hwMId)
    expect(view.hwArticleId).toBe(hwpackdetail.hwArticleId)
    expect(view.hwMakeId).toBe(hwpackdetail.hwMakeId)
    expect(view.skuId).toBe(hwpackdetail.skuId)
    expect(view.skuDNo).toBe(hwpackdetail.skuDNo)
    expect(view.skuDName).toBe(hwpackdetail.skuDName)
    expect(view.skuUnit).toBe(hwpackdetail.skuUnit)
    expect(view.skuImage).toBe(hwpackdetail.skuImage)
    expect(view.skuMakeImage).toBe(hwpackdetail.skuMakeImage)
    expect(view.skuMake).toBe(hwpackdetail.skuMake)
    expect(view.skuSeries).toBe(hwpackdetail.skuSeries)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
