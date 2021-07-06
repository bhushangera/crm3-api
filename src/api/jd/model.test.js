import { Jd } from '.'

let jd

beforeEach(async () => {
  jd = await Jd.create({ jd: 'test', level: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = jd.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jd.id)
    expect(view.jd).toBe(jd.jd)
    expect(view.level).toBe(jd.level)
    expect(view.description).toBe(jd.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = jd.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(jd.id)
    expect(view.jd).toBe(jd.jd)
    expect(view.level).toBe(jd.level)
    expect(view.description).toBe(jd.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
