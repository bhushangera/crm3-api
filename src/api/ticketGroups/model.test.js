import { TicketGroups } from '.'

let ticketGroups

beforeEach(async () => {
  ticketGroups = await TicketGroups.create({ prefix: 'test', group: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ticketGroups.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ticketGroups.id)
    expect(view.prefix).toBe(ticketGroups.prefix)
    expect(view.group).toBe(ticketGroups.group)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ticketGroups.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ticketGroups.id)
    expect(view.prefix).toBe(ticketGroups.prefix)
    expect(view.group).toBe(ticketGroups.group)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
