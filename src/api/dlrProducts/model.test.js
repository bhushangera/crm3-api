import { DlrProducts } from '.'

let dlrProducts

beforeEach(async () => {
  dlrProducts = await DlrProducts.create({ dpCategoryId: 'test', product: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = dlrProducts.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dlrProducts.id)
    expect(view.dpCategoryId).toBe(dlrProducts.dpCategoryId)
    expect(view.product).toBe(dlrProducts.product)
    expect(view.description).toBe(dlrProducts.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = dlrProducts.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dlrProducts.id)
    expect(view.dpCategoryId).toBe(dlrProducts.dpCategoryId)
    expect(view.product).toBe(dlrProducts.product)
    expect(view.description).toBe(dlrProducts.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
