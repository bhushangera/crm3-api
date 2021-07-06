import { Projects } from '.'

let projects

beforeEach(async () => {
  projects = await Projects.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = projects.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projects.id)
    expect(view.code).toBe(projects.code)
    expect(view.description).toBe(projects.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = projects.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projects.id)
    expect(view.code).toBe(projects.code)
    expect(view.description).toBe(projects.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
