import { WorkStations } from '.'

let workStations

beforeEach(async () => {
  workStations = await WorkStations.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = workStations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workStations.id)
    expect(view.code).toBe(workStations.code)
    expect(view.description).toBe(workStations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = workStations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workStations.id)
    expect(view.code).toBe(workStations.code)
    expect(view.description).toBe(workStations.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
