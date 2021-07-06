import { GatePassTypes } from '.'

let gatePassTypes

beforeEach(async () => {
  gatePassTypes = await GatePassTypes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = gatePassTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gatePassTypes.id)
    expect(view.code).toBe(gatePassTypes.code)
    expect(view.description).toBe(gatePassTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = gatePassTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gatePassTypes.id)
    expect(view.code).toBe(gatePassTypes.code)
    expect(view.description).toBe(gatePassTypes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
