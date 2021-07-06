import { Leads } from '.'

let leads

beforeEach(async () => {
  leads = await Leads.create({ name: 'test', mobile: 'test', email: 'test', city: 'test', for: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = leads.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leads.id)
    expect(view.name).toBe(leads.name)
    expect(view.mobile).toBe(leads.mobile)
    expect(view.email).toBe(leads.email)
    expect(view.city).toBe(leads.city)
    expect(view.for).toBe(leads.for)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = leads.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leads.id)
    expect(view.name).toBe(leads.name)
    expect(view.mobile).toBe(leads.mobile)
    expect(view.email).toBe(leads.email)
    expect(view.city).toBe(leads.city)
    expect(view.for).toBe(leads.for)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
