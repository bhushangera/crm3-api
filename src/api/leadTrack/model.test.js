import { LeadTrack } from '.'

let leadTrack

beforeEach(async () => {
  leadTrack = await LeadTrack.create({ leadId: 'test', userId: 'test', trackDate: 'test', trackedBy: 'test', remarks: 'test', nextReminder: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = leadTrack.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leadTrack.id)
    expect(view.leadId).toBe(leadTrack.leadId)
    expect(view.userId).toBe(leadTrack.userId)
    expect(view.trackDate).toBe(leadTrack.trackDate)
    expect(view.trackedBy).toBe(leadTrack.trackedBy)
    expect(view.remarks).toBe(leadTrack.remarks)
    expect(view.nextReminder).toBe(leadTrack.nextReminder)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = leadTrack.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(leadTrack.id)
    expect(view.leadId).toBe(leadTrack.leadId)
    expect(view.userId).toBe(leadTrack.userId)
    expect(view.trackDate).toBe(leadTrack.trackDate)
    expect(view.trackedBy).toBe(leadTrack.trackedBy)
    expect(view.remarks).toBe(leadTrack.remarks)
    expect(view.nextReminder).toBe(leadTrack.nextReminder)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
