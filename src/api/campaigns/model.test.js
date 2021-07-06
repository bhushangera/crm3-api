import { Campaigns } from '.'

let campaigns

beforeEach(async () => {
  campaigns = await Campaigns.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = campaigns.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaigns.id)
    expect(view.code).toBe(campaigns.code)
    expect(view.description).toBe(campaigns.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = campaigns.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaigns.id)
    expect(view.code).toBe(campaigns.code)
    expect(view.description).toBe(campaigns.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
