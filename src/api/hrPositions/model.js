import mongoose, { Schema } from 'mongoose'

const hrPositionsSchema = new Schema({
  partyId: {type: String},
  partyRoleId: { type: String },
  jdId: { type: String},
  jd: { type: String},
  level: {type: String},
  reportingDate: { type: Date },
  joiningDate: {type: Date},
  relevingDate: {type: Date},
  payGradeId: {type: String},
  payGrade: { type: String},
  status: {type: String},
  positionType: {type: String},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

hrPositionsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      partyId: this.partyId,
      partyRoleId: this.partyRoleId,
      jdId: this.jdId,
      jd: this.jd,
      level: this.level,
      reportingDate: this.reportingDate,
      joiningDate: this.joiningDate,
      relevingDate: this.relevingDate,
      payGradeId: this.payGradeId,
      payGrade: this.payGrade,
      status: this.status,
      positionType: this.positionType,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('HrPositions', hrPositionsSchema)

export const schema = model.schema
export default model
