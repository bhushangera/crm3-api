import { Trainers } from '.'

let trainers

beforeEach(async () => {
  trainers = await Trainers.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = trainers.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(trainers.id)
    expect(view.code).toBe(trainers.code)
    expect(view.description).toBe(trainers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = trainers.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(trainers.id)
    expect(view.code).toBe(trainers.code)
    expect(view.description).toBe(trainers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
