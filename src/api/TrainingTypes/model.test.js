import { TrainingTypes } from '.'

let trainingTypes

beforeEach(async () => {
  trainingTypes = await TrainingTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = trainingTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(trainingTypes.id)
    expect(view.code).toBe(trainingTypes.code)
    expect(view.description).toBe(trainingTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = trainingTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(trainingTypes.id)
    expect(view.code).toBe(trainingTypes.code)
    expect(view.description).toBe(trainingTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
