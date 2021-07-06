import { FixedAssetAssignments } from '.'

let fixedAssetAssignments

beforeEach(async () => {
  fixedAssetAssignments = await FixedAssetAssignments.create({ wordEffortId: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', remarks: 'test', status: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = fixedAssetAssignments.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssetAssignments.id)
    expect(view.wordEffortId).toBe(fixedAssetAssignments.wordEffortId)
    expect(view.fromDate).toBe(fixedAssetAssignments.fromDate)
    expect(view.fromTime).toBe(fixedAssetAssignments.fromTime)
    expect(view.toDate).toBe(fixedAssetAssignments.toDate)
    expect(view.toTime).toBe(fixedAssetAssignments.toTime)
    expect(view.remarks).toBe(fixedAssetAssignments.remarks)
    expect(view.status).toBe(fixedAssetAssignments.status)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = fixedAssetAssignments.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(fixedAssetAssignments.id)
    expect(view.wordEffortId).toBe(fixedAssetAssignments.wordEffortId)
    expect(view.fromDate).toBe(fixedAssetAssignments.fromDate)
    expect(view.fromTime).toBe(fixedAssetAssignments.fromTime)
    expect(view.toDate).toBe(fixedAssetAssignments.toDate)
    expect(view.toTime).toBe(fixedAssetAssignments.toTime)
    expect(view.remarks).toBe(fixedAssetAssignments.remarks)
    expect(view.status).toBe(fixedAssetAssignments.status)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
