import { Tcities } from '.'

let tcities

beforeEach(async () => {
  tcities = await Tcities.create({ territoryId: 'test', cityId: 'test', cityName: 'test', country_id: 'test', country_name: 'test', state_id: 'test', state_name: 'test', territory_code: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tcities.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tcities.id)
    expect(view.territoryId).toBe(tcities.territoryId)
    expect(view.cityId).toBe(tcities.cityId)
    expect(view.cityName).toBe(tcities.cityName)
    expect(view.country_id).toBe(tcities.country_id)
    expect(view.country_name).toBe(tcities.country_name)
    expect(view.state_id).toBe(tcities.state_id)
    expect(view.state_name).toBe(tcities.state_name)
    expect(view.territory_code).toBe(tcities.territory_code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tcities.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tcities.id)
    expect(view.territoryId).toBe(tcities.territoryId)
    expect(view.cityId).toBe(tcities.cityId)
    expect(view.cityName).toBe(tcities.cityName)
    expect(view.country_id).toBe(tcities.country_id)
    expect(view.country_name).toBe(tcities.country_name)
    expect(view.state_id).toBe(tcities.state_id)
    expect(view.state_name).toBe(tcities.state_name)
    expect(view.territory_code).toBe(tcities.territory_code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
