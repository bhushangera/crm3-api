import { TapeDecor } from '.'

let tapeDecor

beforeEach(async () => {
  tapeDecor = await TapeDecor.create({ dNo: 'test', dName: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tapeDecor.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tapeDecor.id)
    expect(view.dNo).toBe(tapeDecor.dNo)
    expect(view.dName).toBe(tapeDecor.dName)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tapeDecor.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tapeDecor.id)
    expect(view.dNo).toBe(tapeDecor.dNo)
    expect(view.dName).toBe(tapeDecor.dName)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
