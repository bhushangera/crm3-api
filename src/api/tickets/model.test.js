import { Tickets } from '.'

let tickets

beforeEach(async () => {
  tickets = await Tickets.create({ ticketTypeId: 'test', ticketType: 'test', scrollNo: 'test', recordDate: 'test', creatorParty: 'test', forParty: 'test', description: 'test', closed: 'test', closedDate: 'test', poId: 'test', piId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tickets.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tickets.id)
    expect(view.ticketTypeId).toBe(tickets.ticketTypeId)
    expect(view.ticketType).toBe(tickets.ticketType)
    expect(view.scrollNo).toBe(tickets.scrollNo)
    expect(view.recordDate).toBe(tickets.recordDate)
    expect(view.creatorParty).toBe(tickets.creatorParty)
    expect(view.forParty).toBe(tickets.forParty)
    expect(view.description).toBe(tickets.description)
    expect(view.closed).toBe(tickets.closed)
    expect(view.closedDate).toBe(tickets.closedDate)
    expect(view.poId).toBe(tickets.poId)
    expect(view.piId).toBe(tickets.piId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tickets.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tickets.id)
    expect(view.ticketTypeId).toBe(tickets.ticketTypeId)
    expect(view.ticketType).toBe(tickets.ticketType)
    expect(view.scrollNo).toBe(tickets.scrollNo)
    expect(view.recordDate).toBe(tickets.recordDate)
    expect(view.creatorParty).toBe(tickets.creatorParty)
    expect(view.forParty).toBe(tickets.forParty)
    expect(view.description).toBe(tickets.description)
    expect(view.closed).toBe(tickets.closed)
    expect(view.closedDate).toBe(tickets.closedDate)
    expect(view.poId).toBe(tickets.poId)
    expect(view.piId).toBe(tickets.piId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
