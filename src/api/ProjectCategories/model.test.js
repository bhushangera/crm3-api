import { ProjectCategories } from '.'

let projectCategories

beforeEach(async () => {
  projectCategories = await ProjectCategories.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = projectCategories.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projectCategories.id)
    expect(view.code).toBe(projectCategories.code)
    expect(view.description).toBe(projectCategories.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = projectCategories.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projectCategories.id)
    expect(view.code).toBe(projectCategories.code)
    expect(view.description).toBe(projectCategories.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
