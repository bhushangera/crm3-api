import { ProductCatergory } from '.'

let productCatergory

beforeEach(async () => {
  productCatergory = await ProductCatergory.create({})
})

describe('view', () => {
  it('returns simple view', () => {
    const view = productCatergory.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productCatergory.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = productCatergory.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(productCatergory.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
