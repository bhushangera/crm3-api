import { ProductImages } from '.'

let productImages

beforeEach(async () => {
  productImages = await ProductImages.create({ productId: 'test', image: 'test', isPrimary: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = productImages.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productImages.id)
    expect(view.productId).toBe(productImages.productId)
    expect(view.image).toBe(productImages.image)
    expect(view.isPrimary).toBe(productImages.isPrimary)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = productImages.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productImages.id)
    expect(view.productId).toBe(productImages.productId)
    expect(view.image).toBe(productImages.image)
    expect(view.isPrimary).toBe(productImages.isPrimary)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
