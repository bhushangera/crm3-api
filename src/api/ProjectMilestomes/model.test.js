import { ProjectMilestomes } from '.'

let projectMilestomes

beforeEach(async () => {
  projectMilestomes = await ProjectMilestomes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = projectMilestomes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projectMilestomes.id)
    expect(view.code).toBe(projectMilestomes.code)
    expect(view.description).toBe(projectMilestomes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = projectMilestomes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projectMilestomes.id)
    expect(view.code).toBe(projectMilestomes.code)
    expect(view.description).toBe(projectMilestomes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
