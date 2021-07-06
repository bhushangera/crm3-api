import { Activities } from '.'

let activities

beforeEach(async () => {
  activities = await Activities.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = activities.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(activities.id)
    expect(view.code).toBe(activities.code)
    expect(view.description).toBe(activities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = activities.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(activities.id)
    expect(view.code).toBe(activities.code)
    expect(view.description).toBe(activities.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
