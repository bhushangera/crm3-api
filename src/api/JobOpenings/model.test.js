import { JobOpenings } from '.'

let jobOpenings

beforeEach(async () => {
  jobOpenings = await JobOpenings.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = jobOpenings.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jobOpenings.id)
    expect(view.code).toBe(jobOpenings.code)
    expect(view.description).toBe(jobOpenings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = jobOpenings.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jobOpenings.id)
    expect(view.code).toBe(jobOpenings.code)
    expect(view.description).toBe(jobOpenings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
