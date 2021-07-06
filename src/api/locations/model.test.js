import { Locations } from '.'

let locations

beforeEach(async () => {
  locations = await Locations.create({ territoryId: 'test', region: 'test', country: 'test', state: 'test', location: 'test', territory: 'test', pinCode: 'test', kmFromNC: 'test', kmFromHO: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = locations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(locations.id)
    expect(view.territoryId).toBe(locations.territoryId)
    expect(view.region).toBe(locations.region)
    expect(view.country).toBe(locations.country)
    expect(view.state).toBe(locations.state)
    expect(view.location).toBe(locations.location)
    expect(view.territory).toBe(locations.territory)
    expect(view.pinCode).toBe(locations.pinCode)
    expect(view.kmFromNC).toBe(locations.kmFromNC)
    expect(view.kmFromHO).toBe(locations.kmFromHO)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = locations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(locations.id)
    expect(view.territoryId).toBe(locations.territoryId)
    expect(view.region).toBe(locations.region)
    expect(view.country).toBe(locations.country)
    expect(view.state).toBe(locations.state)
    expect(view.location).toBe(locations.location)
    expect(view.territory).toBe(locations.territory)
    expect(view.pinCode).toBe(locations.pinCode)
    expect(view.kmFromNC).toBe(locations.kmFromNC)
    expect(view.kmFromHO).toBe(locations.kmFromHO)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
