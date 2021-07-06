import { Recipe } from '.'

let recipe

beforeEach(async () => {
  recipe = await Recipe.create({ code: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = recipe.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(recipe.id)
    expect(view.code).toBe(recipe.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = recipe.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(recipe.id)
    expect(view.code).toBe(recipe.code)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
