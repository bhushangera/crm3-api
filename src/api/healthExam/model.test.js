import { HealthExam } from '.'

let healthExam

beforeEach(async () => {
  healthExam = await HealthExam.create({ empId: 'test', userId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = healthExam.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(healthExam.id)
    expect(view.empId).toBe(healthExam.empId)
    expect(view.userId).toBe(healthExam.userId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = healthExam.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(healthExam.id)
    expect(view.empId).toBe(healthExam.empId)
    expect(view.userId).toBe(healthExam.userId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
