import { HrPositions } from '.'

let hrPositions

beforeEach(async () => {
  hrPositions = await HrPositions.create({ partyId: 'test', partyRoleId: 'test', jdId: 'test', jd: 'test', level: 'test', reportingDate: 'test', joiningDate: 'test', relevingDate: 'test', payGradeId: 'test', payGrade: 'test', status: 'test', temporary: 'test', permanent: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = hrPositions.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hrPositions.id)
    expect(view.partyId).toBe(hrPositions.partyId)
    expect(view.partyRoleId).toBe(hrPositions.partyRoleId)
    expect(view.jdId).toBe(hrPositions.jdId)
    expect(view.jd).toBe(hrPositions.jd)
    expect(view.level).toBe(hrPositions.level)
    expect(view.reportingDate).toBe(hrPositions.reportingDate)
    expect(view.joiningDate).toBe(hrPositions.joiningDate)
    expect(view.relevingDate).toBe(hrPositions.relevingDate)
    expect(view.payGradeId).toBe(hrPositions.payGradeId)
    expect(view.payGrade).toBe(hrPositions.payGrade)
    expect(view.status).toBe(hrPositions.status)
    expect(view.temporary).toBe(hrPositions.temporary)
    expect(view.permanent).toBe(hrPositions.permanent)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = hrPositions.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hrPositions.id)
    expect(view.partyId).toBe(hrPositions.partyId)
    expect(view.partyRoleId).toBe(hrPositions.partyRoleId)
    expect(view.jdId).toBe(hrPositions.jdId)
    expect(view.jd).toBe(hrPositions.jd)
    expect(view.level).toBe(hrPositions.level)
    expect(view.reportingDate).toBe(hrPositions.reportingDate)
    expect(view.joiningDate).toBe(hrPositions.joiningDate)
    expect(view.relevingDate).toBe(hrPositions.relevingDate)
    expect(view.payGradeId).toBe(hrPositions.payGradeId)
    expect(view.payGrade).toBe(hrPositions.payGrade)
    expect(view.status).toBe(hrPositions.status)
    expect(view.temporary).toBe(hrPositions.temporary)
    expect(view.permanent).toBe(hrPositions.permanent)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
