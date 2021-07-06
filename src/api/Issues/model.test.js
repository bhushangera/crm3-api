import { Issues } from '.'

let issues

beforeEach(async () => {
  issues = await Issues.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = issues.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(issues.id)
    expect(view.code).toBe(issues.code)
    expect(view.description).toBe(issues.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = issues.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(issues.id)
    expect(view.code).toBe(issues.code)
    expect(view.description).toBe(issues.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
