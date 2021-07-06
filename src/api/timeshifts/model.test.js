import { Timeshifts } from '.'

let timeshifts

beforeEach(async () => {
  timeshifts = await Timeshifts.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = timeshifts.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(timeshifts.id)
    expect(view.code).toBe(timeshifts.code)
    expect(view.description).toBe(timeshifts.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = timeshifts.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(timeshifts.id)
    expect(view.code).toBe(timeshifts.code)
    expect(view.description).toBe(timeshifts.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
