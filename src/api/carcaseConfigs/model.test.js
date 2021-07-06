import { CarcaseConfigs } from '.'

let carcaseConfigs

beforeEach(async () => {
  carcaseConfigs = await CarcaseConfigs.create({ configType: 'test', FM: 'test', BM: 'test', BGS: 'test', DLA: 'test', DFM: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = carcaseConfigs.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(carcaseConfigs.id)
    expect(view.configType).toBe(carcaseConfigs.configType)
    expect(view.FM).toBe(carcaseConfigs.FM)
    expect(view.BM).toBe(carcaseConfigs.BM)
    expect(view.BGS).toBe(carcaseConfigs.BGS)
    expect(view.DLA).toBe(carcaseConfigs.DLA)
    expect(view.DFM).toBe(carcaseConfigs.DFM)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = carcaseConfigs.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(carcaseConfigs.id)
    expect(view.configType).toBe(carcaseConfigs.configType)
    expect(view.FM).toBe(carcaseConfigs.FM)
    expect(view.BM).toBe(carcaseConfigs.BM)
    expect(view.BGS).toBe(carcaseConfigs.BGS)
    expect(view.DLA).toBe(carcaseConfigs.DLA)
    expect(view.DFM).toBe(carcaseConfigs.DFM)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
