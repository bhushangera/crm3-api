import { Complaints } from '.'

let complaints

beforeEach(async () => {
  complaints = await Complaints.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = complaints.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(complaints.id)
    expect(view.code).toBe(complaints.code)
    expect(view.description).toBe(complaints.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = complaints.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(complaints.id)
    expect(view.code).toBe(complaints.code)
    expect(view.description).toBe(complaints.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
