import { TeamMembers } from '.'

let teamMembers

beforeEach(async () => {
  teamMembers = await TeamMembers.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = teamMembers.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(teamMembers.id)
    expect(view.code).toBe(teamMembers.code)
    expect(view.description).toBe(teamMembers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = teamMembers.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(teamMembers.id)
    expect(view.code).toBe(teamMembers.code)
    expect(view.description).toBe(teamMembers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
