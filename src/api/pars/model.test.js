import { Pars } from '.'

let pars

beforeEach(async () => {
  pars = await Pars.create({ PartyId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = pars.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pars.id)
    expect(view.PartyId).toBe(pars.PartyId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = pars.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pars.id)
    expect(view.PartyId).toBe(pars.PartyId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
