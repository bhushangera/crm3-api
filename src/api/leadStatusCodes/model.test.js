import { LeadStatusCodes } from '.'

let leadStatusCodes

beforeEach(async () => {
  leadStatusCodes = await LeadStatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = leadStatusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leadStatusCodes.id)
    expect(view.code).toBe(leadStatusCodes.code)
    expect(view.description).toBe(leadStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = leadStatusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leadStatusCodes.id)
    expect(view.code).toBe(leadStatusCodes.code)
    expect(view.description).toBe(leadStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
