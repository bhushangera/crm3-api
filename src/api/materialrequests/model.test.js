import { Materialrequests } from '.'

let materialrequests

beforeEach(async () => {
  materialrequests = await Materialrequests.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = materialrequests.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(materialrequests.id)
    expect(view.code).toBe(materialrequests.code)
    expect(view.description).toBe(materialrequests.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = materialrequests.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(materialrequests.id)
    expect(view.code).toBe(materialrequests.code)
    expect(view.description).toBe(materialrequests.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
