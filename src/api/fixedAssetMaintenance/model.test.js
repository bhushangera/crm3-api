import { FixedAssetMaintenance } from '.'

let fixedAssetMaintenance

beforeEach(async () => {
  fixedAssetMaintenance = await FixedAssetMaintenance.create({ recordDate: 'test', lastServiceDate: 'test', nextDueDays: 'test', serviceDueDate: 'test', sericeComments: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = fixedAssetMaintenance.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssetMaintenance.id)
    expect(view.recordDate).toBe(fixedAssetMaintenance.recordDate)
    expect(view.lastServiceDate).toBe(fixedAssetMaintenance.lastServiceDate)
    expect(view.nextDueDays).toBe(fixedAssetMaintenance.nextDueDays)
    expect(view.serviceDueDate).toBe(fixedAssetMaintenance.serviceDueDate)
    expect(view.sericeComments).toBe(fixedAssetMaintenance.sericeComments)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = fixedAssetMaintenance.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssetMaintenance.id)
    expect(view.recordDate).toBe(fixedAssetMaintenance.recordDate)
    expect(view.lastServiceDate).toBe(fixedAssetMaintenance.lastServiceDate)
    expect(view.nextDueDays).toBe(fixedAssetMaintenance.nextDueDays)
    expect(view.serviceDueDate).toBe(fixedAssetMaintenance.serviceDueDate)
    expect(view.sericeComments).toBe(fixedAssetMaintenance.sericeComments)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
