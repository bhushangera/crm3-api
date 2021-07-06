import { Territories } from '.'

let territories

beforeEach(async () => {
  territories = await Territories.create({ code: 'test', name: 'test', stateId: 'test', state: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = territories.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(territories.id)
    expect(view.code).toBe(territories.code)
    expect(view.name).toBe(territories.name)
    expect(view.stateId).toBe(territories.stateId)
    expect(view.state).toBe(territories.state)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = territories.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(territories.id)
    expect(view.code).toBe(territories.code)
    expect(view.name).toBe(territories.name)
    expect(view.stateId).toBe(territories.stateId)
    expect(view.state).toBe(territories.state)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
