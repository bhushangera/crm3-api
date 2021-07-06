import { CalenderWeeks } from '.'

let calenderWeeks

beforeEach(async () => {
  calenderWeeks = await CalenderWeeks.create({ weekNo: 'test', startDate: 'test', endDate: 'test', active: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = calenderWeeks.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(calenderWeeks.id)
    expect(view.weekNo).toBe(calenderWeeks.weekNo)
    expect(view.startDate).toBe(calenderWeeks.startDate)
    expect(view.endDate).toBe(calenderWeeks.endDate)
    expect(view.active).toBe(calenderWeeks.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = calenderWeeks.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(calenderWeeks.id)
    expect(view.weekNo).toBe(calenderWeeks.weekNo)
    expect(view.startDate).toBe(calenderWeeks.startDate)
    expect(view.endDate).toBe(calenderWeeks.endDate)
    expect(view.active).toBe(calenderWeeks.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
