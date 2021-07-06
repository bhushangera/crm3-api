import { ChannelTypes } from '.'

let channelTypes

beforeEach(async () => {
  channelTypes = await ChannelTypes.create({ type: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = channelTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(channelTypes.id)
    expect(view.type).toBe(channelTypes.type)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = channelTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(channelTypes.id)
    expect(view.type).toBe(channelTypes.type)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
