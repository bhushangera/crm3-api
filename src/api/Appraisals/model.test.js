import { Appraisals } from '.'

let appraisals

beforeEach(async () => {
  appraisals = await Appraisals.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = appraisals.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(appraisals.id)
    expect(view.code).toBe(appraisals.code)
    expect(view.description).toBe(appraisals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = appraisals.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(appraisals.id)
    expect(view.code).toBe(appraisals.code)
    expect(view.description).toBe(appraisals.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
