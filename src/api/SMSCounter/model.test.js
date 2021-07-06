import { SmsCounter } from '.'

let smsCounter

beforeEach(async () => {
  smsCounter = await SmsCounter.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = smsCounter.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(smsCounter.id)
    expect(view.code).toBe(smsCounter.code)
    expect(view.description).toBe(smsCounter.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = smsCounter.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(smsCounter.id)
    expect(view.code).toBe(smsCounter.code)
    expect(view.description).toBe(smsCounter.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
