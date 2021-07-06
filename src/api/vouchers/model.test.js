import { Vouchers } from '.'

let vouchers

beforeEach(async () => {
  vouchers = await Vouchers.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = vouchers.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(vouchers.id)
    expect(view.code).toBe(vouchers.code)
    expect(view.description).toBe(vouchers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = vouchers.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(vouchers.id)
    expect(view.code).toBe(vouchers.code)
    expect(view.description).toBe(vouchers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
