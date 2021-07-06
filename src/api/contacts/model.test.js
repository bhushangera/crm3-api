import { Contacts } from '.'

let contacts

beforeEach(async () => {
  contacts = await Contacts.create({ name: 'test', lastName: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = contacts.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contacts.id)
    expect(view.name).toBe(contacts.name)
    expect(view.lastName).toBe(contacts.lastName)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = contacts.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contacts.id)
    expect(view.name).toBe(contacts.name)
    expect(view.lastName).toBe(contacts.lastName)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
