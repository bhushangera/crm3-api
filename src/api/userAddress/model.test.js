import { UserAddress } from '.'

let userAddress

beforeEach(async () => {
  userAddress = await UserAddress.create({ userId: 'test', addressType: 'test', building: 'test', street: 'test', address: 'test', pinCode: 'test', contact: 'test', city: 'test', state: 'test', country: 'test', isPrimary: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = userAddress.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userAddress.id)
    expect(view.userId).toBe(userAddress.userId)
    expect(view.addressType).toBe(userAddress.addressType)
    expect(view.building).toBe(userAddress.building)
    expect(view.street).toBe(userAddress.street)
    expect(view.address).toBe(userAddress.address)
    expect(view.pinCode).toBe(userAddress.pinCode)
    expect(view.contact).toBe(userAddress.contact)
    expect(view.city).toBe(userAddress.city)
    expect(view.state).toBe(userAddress.state)
    expect(view.country).toBe(userAddress.country)
    expect(view.isPrimary).toBe(userAddress.isPrimary)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = userAddress.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userAddress.id)
    expect(view.userId).toBe(userAddress.userId)
    expect(view.addressType).toBe(userAddress.addressType)
    expect(view.building).toBe(userAddress.building)
    expect(view.street).toBe(userAddress.street)
    expect(view.address).toBe(userAddress.address)
    expect(view.pinCode).toBe(userAddress.pinCode)
    expect(view.contact).toBe(userAddress.contact)
    expect(view.city).toBe(userAddress.city)
    expect(view.state).toBe(userAddress.state)
    expect(view.country).toBe(userAddress.country)
    expect(view.isPrimary).toBe(userAddress.isPrimary)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
