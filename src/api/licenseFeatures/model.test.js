import { LicenseFeatures } from '.'

let licenseFeatures

beforeEach(async () => {
  licenseFeatures = await LicenseFeatures.create({ licenseId: 'test', fmId: 'test', code: 'test', label: 'test', dailyCost: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = licenseFeatures.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(licenseFeatures.id)
    expect(view.licenseId).toBe(licenseFeatures.licenseId)
    expect(view.fmId).toBe(licenseFeatures.fmId)
    expect(view.code).toBe(licenseFeatures.code)
    expect(view.label).toBe(licenseFeatures.label)
    expect(view.dailyCost).toBe(licenseFeatures.dailyCost)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = licenseFeatures.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(licenseFeatures.id)
    expect(view.licenseId).toBe(licenseFeatures.licenseId)
    expect(view.fmId).toBe(licenseFeatures.fmId)
    expect(view.code).toBe(licenseFeatures.code)
    expect(view.label).toBe(licenseFeatures.label)
    expect(view.dailyCost).toBe(licenseFeatures.dailyCost)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
