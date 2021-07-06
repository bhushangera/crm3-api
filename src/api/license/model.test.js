import { License } from '.'

let license

beforeEach(async () => {
  license = await License.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = license.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(license.id)
    expect(view.code).toBe(license.code)
    expect(view.description).toBe(license.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = license.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(license.id)
    expect(view.code).toBe(license.code)
    expect(view.description).toBe(license.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
