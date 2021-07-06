import { PiFurniture } from '.'

let piFurniture

beforeEach(async () => {
  piFurniture = await PiFurniture.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piFurniture.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piFurniture.id)
    expect(view.code).toBe(piFurniture.code)
    expect(view.description).toBe(piFurniture.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piFurniture.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piFurniture.id)
    expect(view.code).toBe(piFurniture.code)
    expect(view.description).toBe(piFurniture.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
