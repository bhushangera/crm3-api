import { Contactus } from '.'

let contactus

beforeEach(async () => {
  contactus = await Contactus.create({ name: 'test', email: 'test', subject: 'test', telephone: 'test', message: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = contactus.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contactus.id)
    expect(view.name).toBe(contactus.name)
    expect(view.email).toBe(contactus.email)
    expect(view.subject).toBe(contactus.subject)
    expect(view.telephone).toBe(contactus.telephone)
    expect(view.message).toBe(contactus.message)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = contactus.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contactus.id)
    expect(view.name).toBe(contactus.name)
    expect(view.email).toBe(contactus.email)
    expect(view.subject).toBe(contactus.subject)
    expect(view.telephone).toBe(contactus.telephone)
    expect(view.message).toBe(contactus.message)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
