import { Transfers } from '.'

let transfers

beforeEach(async () => {
  transfers = await Transfers.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = transfers.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(transfers.id)
    expect(view.code).toBe(transfers.code)
    expect(view.description).toBe(transfers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = transfers.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(transfers.id)
    expect(view.code).toBe(transfers.code)
    expect(view.description).toBe(transfers.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
