import { StatusCodes } from '.'

let statusCodes

beforeEach(async () => {
  statusCodes = await StatusCodes.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = statusCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(statusCodes.id)
    expect(view.code).toBe(statusCodes.code)
    expect(view.description).toBe(statusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = statusCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(statusCodes.id)
    expect(view.code).toBe(statusCodes.code)
    expect(view.description).toBe(statusCodes.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
