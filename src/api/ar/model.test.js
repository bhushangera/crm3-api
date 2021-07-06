import { Ar } from '.'

let ar

beforeEach(async () => {
  ar = await Ar.create({ SKUId: 'test', image: 'test', SKU: 'test', CQty: 'test', Wastage: 'test', UMOId: 'test', UOM: 'test', Qty: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ar.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ar.id)
    expect(view.SKUId).toBe(ar.SKUId)
    expect(view.image).toBe(ar.image)
    expect(view.SKU).toBe(ar.SKU)
    expect(view.CQty).toBe(ar.CQty)
    expect(view.Wastage).toBe(ar.Wastage)
    expect(view.UMOId).toBe(ar.UMOId)
    expect(view.UOM).toBe(ar.UOM)
    expect(view.Qty).toBe(ar.Qty)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ar.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ar.id)
    expect(view.SKUId).toBe(ar.SKUId)
    expect(view.image).toBe(ar.image)
    expect(view.SKU).toBe(ar.SKU)
    expect(view.CQty).toBe(ar.CQty)
    expect(view.Wastage).toBe(ar.Wastage)
    expect(view.UMOId).toBe(ar.UMOId)
    expect(view.UOM).toBe(ar.UOM)
    expect(view.Qty).toBe(ar.Qty)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
