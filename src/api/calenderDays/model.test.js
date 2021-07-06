import { CalenderDays } from '.'

let calenderDays

beforeEach(async () => {
  calenderDays = await CalenderDays.create({ APCodeId: 'test', APCode: 'test', APStartDate: 'test', APEndDate: 'test', date: 'test', quarter: 'test', monNo: 'test', monWords: 'test', weekNo: 'test', weekDayNo: 'test', dayWords: 'test', day: 'test', holiday: 'test', remarks: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = calenderDays.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(calenderDays.id)
    expect(view.APCodeId).toBe(calenderDays.APCodeId)
    expect(view.APCode).toBe(calenderDays.APCode)
    expect(view.APStartDate).toBe(calenderDays.APStartDate)
    expect(view.APEndDate).toBe(calenderDays.APEndDate)
    expect(view.date).toBe(calenderDays.date)
    expect(view.quarter).toBe(calenderDays.quarter)
    expect(view.monNo).toBe(calenderDays.monNo)
    expect(view.monWords).toBe(calenderDays.monWords)
    expect(view.weekNo).toBe(calenderDays.weekNo)
    expect(view.weekDayNo).toBe(calenderDays.weekDayNo)
    expect(view.dayWords).toBe(calenderDays.dayWords)
    expect(view.day).toBe(calenderDays.day)
    expect(view.holiday).toBe(calenderDays.holiday)
    expect(view.remarks).toBe(calenderDays.remarks)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = calenderDays.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(calenderDays.id)
    expect(view.APCodeId).toBe(calenderDays.APCodeId)
    expect(view.APCode).toBe(calenderDays.APCode)
    expect(view.APStartDate).toBe(calenderDays.APStartDate)
    expect(view.APEndDate).toBe(calenderDays.APEndDate)
    expect(view.date).toBe(calenderDays.date)
    expect(view.quarter).toBe(calenderDays.quarter)
    expect(view.monNo).toBe(calenderDays.monNo)
    expect(view.monWords).toBe(calenderDays.monWords)
    expect(view.weekNo).toBe(calenderDays.weekNo)
    expect(view.weekDayNo).toBe(calenderDays.weekDayNo)
    expect(view.dayWords).toBe(calenderDays.dayWords)
    expect(view.day).toBe(calenderDays.day)
    expect(view.holiday).toBe(calenderDays.holiday)
    expect(view.remarks).toBe(calenderDays.remarks)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
