import { SmsTransactions } from '.'

let smsTransactions

beforeEach(async () => {
  smsTransactions = await SmsTransactions.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = smsTransactions.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(smsTransactions.id)
    expect(view.code).toBe(smsTransactions.code)
    expect(view.description).toBe(smsTransactions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = smsTransactions.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(smsTransactions.id)
    expect(view.code).toBe(smsTransactions.code)
    expect(view.description).toBe(smsTransactions.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
