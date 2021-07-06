import mongoose, { Schema } from 'mongoose'

const payrollSchema = new Schema({
  creationDate: {type: Date},
  fiscalYear: { type: String },
  month: {type: String },
  payrollDate: { type: String },
  totalBasic: { type: String },
  totalEpf: { type: String },
  totalAllowance: {type: String },
  totalCTC: { type: String },
  totalRecovery: { type: String},
  finalized: {type: Boolean},
  approoved: {type: Boolean},
  approovedByPartyId: {type: String},
  approovingPartyDetails: {type: String},
  approovedDate: {type: Date},
  provisioned: {type: Boolean},
  provisonDate: {type: Date},
  disbursed: {type: Boolean},
  disbursedDate: {type: Date},
  status: {type: String} // draft|finalized|approoved|provisioned|disbursed
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

payrollSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      creationDate: this.creationDate,
      fiscalYear: this.fiscalYear,
      month: this.month,
      payrollDate: this.payrollDate,
      totalBasic: this.totalBasic,
      totalEpf: this.totalEpf,
      totalAllowance: this.totalAllowance,
      totalCTC: this.totalCTC,
      totalRecovery: this.totalCTC,
      finalized: this.finalized,
      approoved: this.approoved,
      approovedByPartyId: this.approovedByPartyId,
      approovingPartyDetails: this.approovingPartyDetails,
      approovedDate: this.approovedDate,
      provisioned: this.provisioned,
      provisonDate: this.provisonDate,
      disbursed: this.disbursed,
      disbursedDate: this.disbursedDate,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Payroll', payrollSchema)

export const schema = model.schema
export default model
