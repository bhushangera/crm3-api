import { WorkEffortsScroll } from '.'

let workEffortsScroll

beforeEach(async () => {
  workEffortsScroll = await WorkEffortsScroll.create({ assignedToParty: 'test', partyDetails: 'test', comments: 'test', fromDate: 'test', fromTime: 'test', toDate: 'test', toTime: 'test', closed: 'test', Remarks: string;: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = workEffortsScroll.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workEffortsScroll.id)
    expect(view.assignedToParty).toBe(workEffortsScroll.assignedToParty)
    expect(view.partyDetails).toBe(workEffortsScroll.partyDetails)
    expect(view.comments).toBe(workEffortsScroll.comments)
    expect(view.fromDate).toBe(workEffortsScroll.fromDate)
    expect(view.fromTime).toBe(workEffortsScroll.fromTime)
    expect(view.toDate).toBe(workEffortsScroll.toDate)
    expect(view.toTime).toBe(workEffortsScroll.toTime)
    expect(view.closed).toBe(workEffortsScroll.closed)
    expect(view.Remarks: string;).toBe(workEffortsScroll.Remarks: string;)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = workEffortsScroll.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(workEffortsScroll.id)
    expect(view.assignedToParty).toBe(workEffortsScroll.assignedToParty)
    expect(view.partyDetails).toBe(workEffortsScroll.partyDetails)
    expect(view.comments).toBe(workEffortsScroll.comments)
    expect(view.fromDate).toBe(workEffortsScroll.fromDate)
    expect(view.fromTime).toBe(workEffortsScroll.fromTime)
    expect(view.toDate).toBe(workEffortsScroll.toDate)
    expect(view.toTime).toBe(workEffortsScroll.toTime)
    expect(view.closed).toBe(workEffortsScroll.closed)
    expect(view.Remarks: string;).toBe(workEffortsScroll.Remarks: string;)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
