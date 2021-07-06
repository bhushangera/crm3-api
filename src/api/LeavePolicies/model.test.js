import { LeavePolicies } from '.'

let leavePolicies

beforeEach(async () => {
  leavePolicies = await LeavePolicies.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = leavePolicies.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leavePolicies.id)
    expect(view.code).toBe(leavePolicies.code)
    expect(view.description).toBe(leavePolicies.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = leavePolicies.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leavePolicies.id)
    expect(view.code).toBe(leavePolicies.code)
    expect(view.description).toBe(leavePolicies.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
