import mongoose, { Schema } from 'mongoose'

const employeePerformanceSchema = new Schema({
  partyId: {type: String},
  partyName: { type: String },
  managerId: {type: String},
  managerName: {type: String},
  approoved: {type: Boolean},
  approvingPartyId: {type: String },
  approovingPatyDetails: {type: String},
  fiscalYear: {type: String },
  presents: {type: Number },
  leaves: { type: Number},
  workingHours: { type: Number},
  otHours: { type: Number},
  bonusEarned:{ type: Number},
  month:{ type: String},
  ratingId:{type: String}, // from ratings
  stars:{type: Number },
  rating :{ type: String}, // from ratings
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

employeePerformanceSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      partyId: this.partyId,
      partyName: this.partyName,
      managerId: this.managerId,
      managerName: this.managerName,
      approoved: this.approoved,
      approvingPartyId: this.approvingPartyId,
      approovingPatyDetails: this.approovingPatyDetails,
      fiscalYear: this.fiscalYear,
      presents: this.presents,
      leaves: this.leaves,
      workingHours: this.workingHours,
      otHours: this.otHours,
      bonusEarned:this.bonusEarned,
      month:this.month,
      ratingId:this.ratingId,
      stars:this.stars,
      rating :this.rating,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('EmployeePerformance', employeePerformanceSchema)

export const schema = model.schema
export default model
