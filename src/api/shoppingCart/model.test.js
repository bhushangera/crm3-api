import { ShoppingCart } from '.'

let shoppingCart

beforeEach(async () => {
  shoppingCart = await ShoppingCart.create({ dateAdded: 'test', userId: 'test', partyId: 'test', PIId: 'test', SKUId: 'test', Price: 'test', discount: 'test', GST: 'test', GSTAmount: 'test', Qty: 'test', shipping: 'test', totalAmount: 'test', wishlist: 'test', ordered: 'test', trash: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = shoppingCart.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shoppingCart.id)
    expect(view.dateAdded).toBe(shoppingCart.dateAdded)
    expect(view.userId).toBe(shoppingCart.userId)
    expect(view.partyId).toBe(shoppingCart.partyId)
    expect(view.PIId).toBe(shoppingCart.PIId)
    expect(view.SKUId).toBe(shoppingCart.SKUId)
    expect(view.Price).toBe(shoppingCart.Price)
    expect(view.discount).toBe(shoppingCart.discount)
    expect(view.GST).toBe(shoppingCart.GST)
    expect(view.GSTAmount).toBe(shoppingCart.GSTAmount)
    expect(view.Qty).toBe(shoppingCart.Qty)
    expect(view.shipping).toBe(shoppingCart.shipping)
    expect(view.totalAmount).toBe(shoppingCart.totalAmount)
    expect(view.wishlist).toBe(shoppingCart.wishlist)
    expect(view.ordered).toBe(shoppingCart.ordered)
    expect(view.trash).toBe(shoppingCart.trash)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = shoppingCart.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shoppingCart.id)
    expect(view.dateAdded).toBe(shoppingCart.dateAdded)
    expect(view.userId).toBe(shoppingCart.userId)
    expect(view.partyId).toBe(shoppingCart.partyId)
    expect(view.PIId).toBe(shoppingCart.PIId)
    expect(view.SKUId).toBe(shoppingCart.SKUId)
    expect(view.Price).toBe(shoppingCart.Price)
    expect(view.discount).toBe(shoppingCart.discount)
    expect(view.GST).toBe(shoppingCart.GST)
    expect(view.GSTAmount).toBe(shoppingCart.GSTAmount)
    expect(view.Qty).toBe(shoppingCart.Qty)
    expect(view.shipping).toBe(shoppingCart.shipping)
    expect(view.totalAmount).toBe(shoppingCart.totalAmount)
    expect(view.wishlist).toBe(shoppingCart.wishlist)
    expect(view.ordered).toBe(shoppingCart.ordered)
    expect(view.trash).toBe(shoppingCart.trash)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})