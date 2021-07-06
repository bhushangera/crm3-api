import { OperativeFactors } from '.'

let operativeFactors

beforeEach(async () => {
  operativeFactors = await OperativeFactors.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = operativeFactors.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(operativeFactors.id)
    expect(view.code).toBe(operativeFactors.code)
    expect(view.description).toBe(operativeFactors.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = operativeFactors.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(operativeFactors.id)
    expect(view.code).toBe(operativeFactors.code)
    expect(view.description).toBe(operativeFactors.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
