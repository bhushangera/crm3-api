import { Sms } from '.'

let sms

beforeEach(async () => {
  sms = await Sms.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = sms.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sms.id)
    expect(view.code).toBe(sms.code)
    expect(view.description).toBe(sms.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = sms.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sms.id)
    expect(view.code).toBe(sms.code)
    expect(view.description).toBe(sms.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
