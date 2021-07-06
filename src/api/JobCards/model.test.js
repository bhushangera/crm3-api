import { JobCards } from '.'

let jobCards

beforeEach(async () => {
  jobCards = await JobCards.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = jobCards.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jobCards.id)
    expect(view.code).toBe(jobCards.code)
    expect(view.description).toBe(jobCards.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = jobCards.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jobCards.id)
    expect(view.code).toBe(jobCards.code)
    expect(view.description).toBe(jobCards.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
