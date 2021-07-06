import { PiPanel } from '.'

let piPanel

beforeEach(async () => {
  piPanel = await PiPanel.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = piPanel.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piPanel.id)
    expect(view.code).toBe(piPanel.code)
    expect(view.description).toBe(piPanel.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = piPanel.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(piPanel.id)
    expect(view.code).toBe(piPanel.code)
    expect(view.description).toBe(piPanel.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
