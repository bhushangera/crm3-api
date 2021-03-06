import { DealerProfile } from '.'

let dealerProfile

beforeEach(async () => {
  dealerProfile = await DealerProfile.create({ userId: 'test', firmName: 'test', firmType: 'test', contactPerson: 'test', designation: 'test', mobile: 'test', landline: 'test', website: 'test', businessEmail: 'test', building: 'test', street: 'test', address: 'test', city: 'test', state: 'test', country: 'test', GSTIN: 'test', bank: 'test', account: 'test', branch: 'test', branchAddress: 'test', IFSC: 'test', MICR: 'test', pinCode: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = dealerProfile.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dealerProfile.id)
    expect(view.userId).toBe(dealerProfile.userId)
    expect(view.firmName).toBe(dealerProfile.firmName)
    expect(view.firmType).toBe(dealerProfile.firmType)
    expect(view.contactPerson).toBe(dealerProfile.contactPerson)
    expect(view.designation).toBe(dealerProfile.designation)
    expect(view.mobile).toBe(dealerProfile.mobile)
    expect(view.landline).toBe(dealerProfile.landline)
    expect(view.website).toBe(dealerProfile.website)
    expect(view.businessEmail).toBe(dealerProfile.businessEmail)
    expect(view.building).toBe(dealerProfile.building)
    expect(view.street).toBe(dealerProfile.street)
    expect(view.address).toBe(dealerProfile.address)
    expect(view.city).toBe(dealerProfile.city)
    expect(view.state).toBe(dealerProfile.state)
    expect(view.country).toBe(dealerProfile.country)
    expect(view.GSTIN).toBe(dealerProfile.GSTIN)
    expect(view.bank).toBe(dealerProfile.bank)
    expect(view.account).toBe(dealerProfile.account)
    expect(view.branch).toBe(dealerProfile.branch)
    expect(view.branchAddress).toBe(dealerProfile.branchAddress)
    expect(view.IFSC).toBe(dealerProfile.IFSC)
    expect(view.MICR).toBe(dealerProfile.MICR)
    expect(view.pinCode).toBe(dealerProfile.pinCode)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = dealerProfile.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dealerProfile.id)
    expect(view.userId).toBe(dealerProfile.userId)
    expect(view.firmName).toBe(dealerProfile.firmName)
    expect(view.firmType).toBe(dealerProfile.firmType)
    expect(view.contactPerson).toBe(dealerProfile.contactPerson)
    expect(view.designation).toBe(dealerProfile.designation)
    expect(view.mobile).toBe(dealerProfile.mobile)
    expect(view.landline).toBe(dealerProfile.landline)
    expect(view.website).toBe(dealerProfile.website)
    expect(view.businessEmail).toBe(dealerProfile.businessEmail)
    expect(view.building).toBe(dealerProfile.building)
    expect(view.street).toBe(dealerProfile.street)
    expect(view.address).toBe(dealerProfile.address)
    expect(view.city).toBe(dealerProfile.city)
    expect(view.state).toBe(dealerProfile.state)
    expect(view.country).toBe(dealerProfile.country)
    expect(view.GSTIN).toBe(dealerProfile.GSTIN)
    expect(view.bank).toBe(dealerProfile.bank)
    expect(view.account).toBe(dealerProfile.account)
    expect(view.branch).toBe(dealerProfile.branch)
    expect(view.branchAddress).toBe(dealerProfile.branchAddress)
    expect(view.IFSC).toBe(dealerProfile.IFSC)
    expect(view.MICR).toBe(dealerProfile.MICR)
    expect(view.pinCode).toBe(dealerProfile.pinCode)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
