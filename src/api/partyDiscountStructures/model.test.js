import { PartyDiscountStructures } from '.'

let partyDiscountStructures

beforeEach(async () => {
  partyDiscountStructures = await PartyDiscountStructures.create({ dfId: 'test', dfDetails: 'test', fromDate: 'test', toDate: 'test', active: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = partyDiscountStructures.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partyDiscountStructures.id)
    expect(view.dfId).toBe(partyDiscountStructures.dfId)
    expect(view.dfDetails).toBe(partyDiscountStructures.dfDetails)
    expect(view.fromDate).toBe(partyDiscountStructures.fromDate)
    expect(view.toDate).toBe(partyDiscountStructures.toDate)
    expect(view.active).toBe(partyDiscountStructures.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = partyDiscountStructures.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partyDiscountStructures.id)
    expect(view.dfId).toBe(partyDiscountStructures.dfId)
    expect(view.dfDetails).toBe(partyDiscountStructures.dfDetails)
    expect(view.fromDate).toBe(partyDiscountStructures.fromDate)
    expect(view.toDate).toBe(partyDiscountStructures.toDate)
    expect(view.active).toBe(partyDiscountStructures.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
