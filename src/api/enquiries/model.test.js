import { Enquiries } from '.'

let enquiries

beforeEach(async () => {
  enquiries = await Enquiries.create({ enqDate: 'test', userId: 'test', dpId: 'test', dealerName: 'test', dealerDetails: 'test', subject: 'test', text: 'test', status: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = enquiries.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(enquiries.id)
    expect(view.enqDate).toBe(enquiries.enqDate)
    expect(view.userId).toBe(enquiries.userId)
    expect(view.dpId).toBe(enquiries.dpId)
    expect(view.dealerName).toBe(enquiries.dealerName)
    expect(view.dealerDetails).toBe(enquiries.dealerDetails)
    expect(view.subject).toBe(enquiries.subject)
    expect(view.text).toBe(enquiries.text)
    expect(view.status).toBe(enquiries.status)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = enquiries.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(enquiries.id)
    expect(view.enqDate).toBe(enquiries.enqDate)
    expect(view.userId).toBe(enquiries.userId)
    expect(view.dpId).toBe(enquiries.dpId)
    expect(view.dealerName).toBe(enquiries.dealerName)
    expect(view.dealerDetails).toBe(enquiries.dealerDetails)
    expect(view.subject).toBe(enquiries.subject)
    expect(view.text).toBe(enquiries.text)
    expect(view.status).toBe(enquiries.status)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
