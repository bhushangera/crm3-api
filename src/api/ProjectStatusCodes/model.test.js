import { ProjectStatusCodes } from '.'

let projectStatusCodes

beforeEach(async () => {
  projectStatusCodes = await ProjectStatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = projectStatusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projectStatusCodes.id)
    expect(view.code).toBe(projectStatusCodes.code)
    expect(view.description).toBe(projectStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = projectStatusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projectStatusCodes.id)
    expect(view.code).toBe(projectStatusCodes.code)
    expect(view.description).toBe(projectStatusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
