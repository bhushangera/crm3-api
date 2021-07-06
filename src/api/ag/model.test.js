import { Ag } from '.'

let ag

beforeEach(async () => {
  ag = await Ag.create({ MId: 'test', MCode: 'test', mType: 'test', MCId: 'test', MCCode: 'test', SMCId: 'test', SMCCode: 'test', AGCode: 'test', AGDescription: 'test', image: 'test', slug: 'test', isActive: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ag.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ag.id)
    expect(view.MId).toBe(ag.MId)
    expect(view.MCode).toBe(ag.MCode)
    expect(view.mType).toBe(ag.mType)
    expect(view.MCId).toBe(ag.MCId)
    expect(view.MCCode).toBe(ag.MCCode)
    expect(view.SMCId).toBe(ag.SMCId)
    expect(view.SMCCode).toBe(ag.SMCCode)
    expect(view.AGCode).toBe(ag.AGCode)
    expect(view.AGDescription).toBe(ag.AGDescription)
    expect(view.image).toBe(ag.image)
    expect(view.slug).toBe(ag.slug)
    expect(view.isActive).toBe(ag.isActive)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ag.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ag.id)
    expect(view.MId).toBe(ag.MId)
    expect(view.MCode).toBe(ag.MCode)
    expect(view.mType).toBe(ag.mType)
    expect(view.MCId).toBe(ag.MCId)
    expect(view.MCCode).toBe(ag.MCCode)
    expect(view.SMCId).toBe(ag.SMCId)
    expect(view.SMCCode).toBe(ag.SMCCode)
    expect(view.AGCode).toBe(ag.AGCode)
    expect(view.AGDescription).toBe(ag.AGDescription)
    expect(view.image).toBe(ag.image)
    expect(view.slug).toBe(ag.slug)
    expect(view.isActive).toBe(ag.isActive)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
