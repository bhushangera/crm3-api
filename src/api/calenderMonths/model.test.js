import { CalenderMonths } from '.'

let calenderMonths

beforeEach(async () => {
  calenderMonths = await CalenderMonths.create({ mNo: 'test', mWords: 'test', mdays: 'test', active: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = calenderMonths.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(calenderMonths.id)
    expect(view.mNo).toBe(calenderMonths.mNo)
    expect(view.mWords).toBe(calenderMonths.mWords)
    expect(view.mdays).toBe(calenderMonths.mdays)
    expect(view.active).toBe(calenderMonths.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = calenderMonths.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(calenderMonths.id)
    expect(view.mNo).toBe(calenderMonths.mNo)
    expect(view.mWords).toBe(calenderMonths.mWords)
    expect(view.mdays).toBe(calenderMonths.mdays)
    expect(view.active).toBe(calenderMonths.active)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
