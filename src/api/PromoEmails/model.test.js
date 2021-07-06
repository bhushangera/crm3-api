import { PromoEmails } from '.'

let promoEmails

beforeEach(async () => {
  promoEmails = await PromoEmails.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = promoEmails.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(promoEmails.id)
    expect(view.code).toBe(promoEmails.code)
    expect(view.description).toBe(promoEmails.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = promoEmails.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(promoEmails.id)
    expect(view.code).toBe(promoEmails.code)
    expect(view.description).toBe(promoEmails.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
