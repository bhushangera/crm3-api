import { PartyStorageUnits } from '.'

let partyStorageUnits

beforeEach(async () => {
  partyStorageUnits = await PartyStorageUnits.create({ partyId: 'test', partyDetails: 'test', SUTypeId: 'test', SUTypeCode: 'test', code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = partyStorageUnits.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partyStorageUnits.id)
    expect(view.partyId).toBe(partyStorageUnits.partyId)
    expect(view.partyDetails).toBe(partyStorageUnits.partyDetails)
    expect(view.SUTypeId).toBe(partyStorageUnits.SUTypeId)
    expect(view.SUTypeCode).toBe(partyStorageUnits.SUTypeCode)
    expect(view.code).toBe(partyStorageUnits.code)
    expect(view.description).toBe(partyStorageUnits.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = partyStorageUnits.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partyStorageUnits.id)
    expect(view.partyId).toBe(partyStorageUnits.partyId)
    expect(view.partyDetails).toBe(partyStorageUnits.partyDetails)
    expect(view.SUTypeId).toBe(partyStorageUnits.SUTypeId)
    expect(view.SUTypeCode).toBe(partyStorageUnits.SUTypeCode)
    expect(view.code).toBe(partyStorageUnits.code)
    expect(view.description).toBe(partyStorageUnits.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
