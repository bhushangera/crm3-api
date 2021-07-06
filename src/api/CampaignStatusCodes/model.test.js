import { CampaignStatusCodes } from '.'

let campaignStatusCodes

beforeEach(async () => {
  campaignStatusCodes = await CampaignStatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = campaignStatusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaignStatusCodes.id)
    expect(view.code).toBe(campaignStatusCodes.code)
    expect(view.description).toBe(campaignStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = campaignStatusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaignStatusCodes.id)
    expect(view.code).toBe(campaignStatusCodes.code)
    expect(view.description).toBe(campaignStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
