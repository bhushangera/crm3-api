import { PartCodes } from '.'

let partCodes

beforeEach(async () => {
  partCodes = await PartCodes.create({ partCategoryId: 'test', partCode: 'test', kitchenOnly: 'test', carcaseOnly: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = partCodes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partCodes.id)
    expect(view.partCategoryId).toBe(partCodes.partCategoryId)
    expect(view.partCode).toBe(partCodes.partCode)
    expect(view.kitchenOnly).toBe(partCodes.kitchenOnly)
    expect(view.carcaseOnly).toBe(partCodes.carcaseOnly)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = partCodes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(partCodes.id)
    expect(view.partCategoryId).toBe(partCodes.partCategoryId)
    expect(view.partCode).toBe(partCodes.partCode)
    expect(view.kitchenOnly).toBe(partCodes.kitchenOnly)
    expect(view.carcaseOnly).toBe(partCodes.carcaseOnly)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
