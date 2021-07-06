import { EnqAttachments } from '.'

let enqAttachments

beforeEach(async () => {
  enqAttachments = await EnqAttachments.create({ enqId: 'test', file: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = enqAttachments.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(enqAttachments.id)
    expect(view.enqId).toBe(enqAttachments.enqId)
    expect(view.file).toBe(enqAttachments.file)
    expect(view.description).toBe(enqAttachments.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = enqAttachments.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(enqAttachments.id)
    expect(view.enqId).toBe(enqAttachments.enqId)
    expect(view.file).toBe(enqAttachments.file)
    expect(view.description).toBe(enqAttachments.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
