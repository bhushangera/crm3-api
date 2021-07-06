import { Assets } from '.'

let assets

beforeEach(async () => {
  assets = await Assets.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = assets.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assets.id)
    expect(view.code).toBe(assets.code)
    expect(view.description).toBe(assets.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = assets.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(assets.id)
    expect(view.code).toBe(assets.code)
    expect(view.description).toBe(assets.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
