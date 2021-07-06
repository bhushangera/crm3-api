import { PanelSize } from '.'

let panelSize

beforeEach(async () => {
  panelSize = await PanelSize.create({ code: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = panelSize.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(panelSize.id)
    expect(view.code).toBe(panelSize.code)
    expect(view.description).toBe(panelSize.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = panelSize.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(panelSize.id)
    expect(view.code).toBe(panelSize.code)
    expect(view.description).toBe(panelSize.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
