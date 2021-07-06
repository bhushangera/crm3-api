import { WorkEfforts } from '.'

let workEfforts

beforeEach(async () => {
  workEfforts = await WorkEfforts.create({ scrollNo: 'test', ticketId: 'test', workEffectTypeId: 'test', wordEffectType: 'test', description: 'test', sheduledStartDate: 'test', sheduledEndDate: 'test', actualStartDate: 'test', actualEndDate: 'test', totalBudget: 'test', totalHours: 'test', actualHours: 'test', specialTerms: 'test', productionRun: 'test', qtyToProduce: 'test', qtyProduced: 'test', qtyRejected: 'test', runType: 'test', complete: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = workEfforts.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workEfforts.id)
    expect(view.scrollNo).toBe(workEfforts.scrollNo)
    expect(view.ticketId).toBe(workEfforts.ticketId)
    expect(view.workEffectTypeId).toBe(workEfforts.workEffectTypeId)
    expect(view.wordEffectType).toBe(workEfforts.wordEffectType)
    expect(view.description).toBe(workEfforts.description)
    expect(view.sheduledStartDate).toBe(workEfforts.sheduledStartDate)
    expect(view.sheduledEndDate).toBe(workEfforts.sheduledEndDate)
    expect(view.actualStartDate).toBe(workEfforts.actualStartDate)
    expect(view.actualEndDate).toBe(workEfforts.actualEndDate)
    expect(view.totalBudget).toBe(workEfforts.totalBudget)
    expect(view.totalHours).toBe(workEfforts.totalHours)
    expect(view.actualHours).toBe(workEfforts.actualHours)
    expect(view.specialTerms).toBe(workEfforts.specialTerms)
    expect(view.productionRun).toBe(workEfforts.productionRun)
    expect(view.qtyToProduce).toBe(workEfforts.qtyToProduce)
    expect(view.qtyProduced).toBe(workEfforts.qtyProduced)
    expect(view.qtyRejected).toBe(workEfforts.qtyRejected)
    expect(view.runType).toBe(workEfforts.runType)
    expect(view.complete).toBe(workEfforts.complete)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = workEfforts.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workEfforts.id)
    expect(view.scrollNo).toBe(workEfforts.scrollNo)
    expect(view.ticketId).toBe(workEfforts.ticketId)
    expect(view.workEffectTypeId).toBe(workEfforts.workEffectTypeId)
    expect(view.wordEffectType).toBe(workEfforts.wordEffectType)
    expect(view.description).toBe(workEfforts.description)
    expect(view.sheduledStartDate).toBe(workEfforts.sheduledStartDate)
    expect(view.sheduledEndDate).toBe(workEfforts.sheduledEndDate)
    expect(view.actualStartDate).toBe(workEfforts.actualStartDate)
    expect(view.actualEndDate).toBe(workEfforts.actualEndDate)
    expect(view.totalBudget).toBe(workEfforts.totalBudget)
    expect(view.totalHours).toBe(workEfforts.totalHours)
    expect(view.actualHours).toBe(workEfforts.actualHours)
    expect(view.specialTerms).toBe(workEfforts.specialTerms)
    expect(view.productionRun).toBe(workEfforts.productionRun)
    expect(view.qtyToProduce).toBe(workEfforts.qtyToProduce)
    expect(view.qtyProduced).toBe(workEfforts.qtyProduced)
    expect(view.qtyRejected).toBe(workEfforts.qtyRejected)
    expect(view.runType).toBe(workEfforts.runType)
    expect(view.complete).toBe(workEfforts.complete)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})