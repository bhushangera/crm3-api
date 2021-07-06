import { CampaignTypes } from '.'

let campaignTypes

beforeEach(async () => {
  campaignTypes = await CampaignTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = campaignTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaignTypes.id)
    expect(view.code).toBe(campaignTypes.code)
    expect(view.description).toBe(campaignTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = campaignTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaignTypes.id)
    expect(view.code).toBe(campaignTypes.code)
    expect(view.description).toBe(campaignTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
