import { GatePass } from '.'

let gatePass

beforeEach(async () => {
  gatePass = await GatePass.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = gatePass.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gatePass.id)
    expect(view.code).toBe(gatePass.code)
    expect(view.description).toBe(gatePass.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = gatePass.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gatePass.id)
    expect(view.code).toBe(gatePass.code)
    expect(view.description).toBe(gatePass.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
