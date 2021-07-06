import { WorkEffortTypes } from '.'

let workEffortTypes

beforeEach(async () => {
  workEffortTypes = await WorkEffortTypes.create({ type: 'test', stdWorkHours: 'test', uomId: 'test', uom: 'test', conversionFactor: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = workEffortTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workEffortTypes.id)
    expect(view.type).toBe(workEffortTypes.type)
    expect(view.stdWorkHours).toBe(workEffortTypes.stdWorkHours)
    expect(view.uomId).toBe(workEffortTypes.uomId)
    expect(view.uom).toBe(workEffortTypes.uom)
    expect(view.conversionFactor).toBe(workEffortTypes.conversionFactor)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = workEffortTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workEffortTypes.id)
    expect(view.type).toBe(workEffortTypes.type)
    expect(view.stdWorkHours).toBe(workEffortTypes.stdWorkHours)
    expect(view.uomId).toBe(workEffortTypes.uomId)
    expect(view.uom).toBe(workEffortTypes.uom)
    expect(view.conversionFactor).toBe(workEffortTypes.conversionFactor)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
