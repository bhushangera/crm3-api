import { PiDoor } from '.'

let piDoor

beforeEach(async () => {
  piDoor = await PiDoor.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piDoor.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piDoor.id)
    expect(view.code).toBe(piDoor.code)
    expect(view.description).toBe(piDoor.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piDoor.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piDoor.id)
    expect(view.code).toBe(piDoor.code)
    expect(view.description).toBe(piDoor.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
