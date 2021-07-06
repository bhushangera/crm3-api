import { SendMail } from '.'

let sendMail

beforeEach(async () => {
  sendMail = await SendMail.create({ mailDate: 'test', from: 'test', senderId: 'test', to: 'test', receiverId: 'test', subject: 'test', body: 'test', deleted: 'test', read: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = sendMail.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sendMail.id)
    expect(view.mailDate).toBe(sendMail.mailDate)
    expect(view.from).toBe(sendMail.from)
    expect(view.senderId).toBe(sendMail.senderId)
    expect(view.to).toBe(sendMail.to)
    expect(view.receiverId).toBe(sendMail.receiverId)
    expect(view.subject).toBe(sendMail.subject)
    expect(view.body).toBe(sendMail.body)
    expect(view.deleted).toBe(sendMail.deleted)
    expect(view.read).toBe(sendMail.read)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = sendMail.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sendMail.id)
    expect(view.mailDate).toBe(sendMail.mailDate)
    expect(view.from).toBe(sendMail.from)
    expect(view.senderId).toBe(sendMail.senderId)
    expect(view.to).toBe(sendMail.to)
    expect(view.receiverId).toBe(sendMail.receiverId)
    expect(view.subject).toBe(sendMail.subject)
    expect(view.body).toBe(sendMail.body)
    expect(view.deleted).toBe(sendMail.deleted)
    expect(view.read).toBe(sendMail.read)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
