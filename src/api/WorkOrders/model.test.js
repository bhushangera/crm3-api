import { WorkOrders } from '.'

let workOrders

beforeEach(async () => {
  workOrders = await WorkOrders.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = workOrders.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workOrders.id)
    expect(view.code).toBe(workOrders.code)
    expect(view.description).toBe(workOrders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = workOrders.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workOrders.id)
    expect(view.code).toBe(workOrders.code)
    expect(view.description).toBe(workOrders.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
