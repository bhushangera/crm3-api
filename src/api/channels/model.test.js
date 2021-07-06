import { Channels } from '.'

let channels

beforeEach(async () => {
  channels = await Channels.create({ channelTypeId: 'test', makeId: 'test', description: 'test', CM: 'test', channerlName: 'test', makeName: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = channels.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(channels.id)
    expect(view.channelTypeId).toBe(channels.channelTypeId)
    expect(view.makeId).toBe(channels.makeId)
    expect(view.description).toBe(channels.description)
    expect(view.CM).toBe(channels.CM)
    expect(view.channerlName).toBe(channels.channerlName)
    expect(view.makeName).toBe(channels.makeName)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = channels.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(channels.id)
    expect(view.channelTypeId).toBe(channels.channelTypeId)
    expect(view.makeId).toBe(channels.makeId)
    expect(view.description).toBe(channels.description)
    expect(view.CM).toBe(channels.CM)
    expect(view.channerlName).toBe(channels.channerlName)
    expect(view.makeName).toBe(channels.makeName)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
