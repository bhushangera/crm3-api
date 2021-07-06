import { DeliveryNote } from '.'

let deliveryNote

beforeEach(async () => {
  deliveryNote = await DeliveryNote.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = deliveryNote.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(deliveryNote.id)
    expect(view.code).toBe(deliveryNote.code)
    expect(view.description).toBe(deliveryNote.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = deliveryNote.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(deliveryNote.id)
    expect(view.code).toBe(deliveryNote.code)
    expect(view.description).toBe(deliveryNote.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
