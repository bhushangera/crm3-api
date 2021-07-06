import { ContactGroup } from '.'

let contactGroup

beforeEach(async () => {
  contactGroup = await ContactGroup.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = contactGroup.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contactGroup.id)
    expect(view.code).toBe(contactGroup.code)
    expect(view.description).toBe(contactGroup.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = contactGroup.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contactGroup.id)
    expect(view.code).toBe(contactGroup.code)
    expect(view.description).toBe(contactGroup.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
