import { IssueTypes } from '.'

let issueTypes

beforeEach(async () => {
  issueTypes = await IssueTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = issueTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(issueTypes.id)
    expect(view.code).toBe(issueTypes.code)
    expect(view.description).toBe(issueTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = issueTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(issueTypes.id)
    expect(view.code).toBe(issueTypes.code)
    expect(view.description).toBe(issueTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
