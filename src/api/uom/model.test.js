import { Uom } from '.'

let uom

beforeEach(async () => {
  uom = await Uom.create({ units: 'test', : 'test', unitGroup: 'test', description: 'test', conversionFactor: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = uom.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(uom.id)
    expect(view.units).toBe(uom.units)
    expect(view.).toBe(uom.)
    expect(view.unitGroup).toBe(uom.unitGroup)
    expect(view.description).toBe(uom.description)
    expect(view.conversionFactor).toBe(uom.conversionFactor)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = uom.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(uom.id)
    expect(view.units).toBe(uom.units)
    expect(view.).toBe(uom.)
    expect(view.unitGroup).toBe(uom.unitGroup)
    expect(view.description).toBe(uom.description)
    expect(view.conversionFactor).toBe(uom.conversionFactor)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
