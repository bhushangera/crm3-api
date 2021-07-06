import { Trainings } from '.'

let trainings

beforeEach(async () => {
  trainings = await Trainings.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = trainings.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(trainings.id)
    expect(view.code).toBe(trainings.code)
    expect(view.description).toBe(trainings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = trainings.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(trainings.id)
    expect(view.code).toBe(trainings.code)
    expect(view.description).toBe(trainings.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
