import { Make } from '.'

let make

beforeEach(async () => {
  make = await Make.create({ makeCode.makeName: 'test', isBaseProvider: 'test', isFinishingProvider: 'test', isAccessoryProvider: 'test', isHardwareProvider: 'test', isActive: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = make.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(make.id)
    expect(view.makeCode.makeName).toBe(make.makeCode.makeName)
    expect(view.isBaseProvider).toBe(make.isBaseProvider)
    expect(view.isFinishingProvider).toBe(make.isFinishingProvider)
    expect(view.isAccessoryProvider).toBe(make.isAccessoryProvider)
    expect(view.isHardwareProvider).toBe(make.isHardwareProvider)
    expect(view.isActive).toBe(make.isActive)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = make.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(make.id)
    expect(view.makeCode.makeName).toBe(make.makeCode.makeName)
    expect(view.isBaseProvider).toBe(make.isBaseProvider)
    expect(view.isFinishingProvider).toBe(make.isFinishingProvider)
    expect(view.isAccessoryProvider).toBe(make.isAccessoryProvider)
    expect(view.isHardwareProvider).toBe(make.isHardwareProvider)
    expect(view.isActive).toBe(make.isActive)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
