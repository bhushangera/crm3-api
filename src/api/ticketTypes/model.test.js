import { TicketTypes } from '.'

let ticketTypes

beforeEach(async () => {
  ticketTypes = await TicketTypes.create({ ticketGroupId: 'test', ticketGroup: 'test', code: 'test', description: 'test', priority: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ticketTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ticketTypes.id)
    expect(view.ticketGroupId).toBe(ticketTypes.ticketGroupId)
    expect(view.ticketGroup).toBe(ticketTypes.ticketGroup)
    expect(view.code).toBe(ticketTypes.code)
    expect(view.description).toBe(ticketTypes.description)
    expect(view.priority).toBe(ticketTypes.priority)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ticketTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ticketTypes.id)
    expect(view.ticketGroupId).toBe(ticketTypes.ticketGroupId)
    expect(view.ticketGroup).toBe(ticketTypes.ticketGroup)
    expect(view.code).toBe(ticketTypes.code)
    expect(view.description).toBe(ticketTypes.description)
    expect(view.priority).toBe(ticketTypes.priority)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
