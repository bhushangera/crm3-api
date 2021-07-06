import { JobApplications } from '.'

let jobApplications

beforeEach(async () => {
  jobApplications = await JobApplications.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = jobApplications.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jobApplications.id)
    expect(view.code).toBe(jobApplications.code)
    expect(view.description).toBe(jobApplications.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = jobApplications.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jobApplications.id)
    expect(view.code).toBe(jobApplications.code)
    expect(view.description).toBe(jobApplications.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
