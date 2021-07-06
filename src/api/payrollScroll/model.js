import mongoose, { Schema } from 'mongoose'

const payrollScrollSchema = new Schema({
  scrollNo: {
    type: String
  },
  partyId: {
    type: String
  },
  payGradeId: {
    type: String
  },
  payGrade: {
    type: String
  },
  partyDetails: {
    type: String
  },
  department: {
    type: String
  },
  PresentDays: {
    type: String
  },
  PaidDays: {
    type: String
  },
  CL: {
    type: String
  },
  EL: {
    type: String
  },
  totaHrsAllowed: {
    type: String
  },
  dutyHrs: {
    type: String
  },
  weeklyOff: {
    type: String
  },
  otHours: {
    type: String
  },
  totalIncrements: {
    type: String
  },
  IncrementAmount: {
    type: String
  },
  scale: {
    type: String
  },
  HRADeduction: {
    type: String
  },
  HRA: {
    type: String
  },
  DA: {
    type: String
  },
  SA: {
    type: String
  },
  OTA: {
    type: String
  },
  EPFEmployee: {
    type: String
  },
  EPFEmployer: {
    type: String
  },
  loanRecovery: {
    type: String
  },
  CTC: {
    type: String
  },
  totalDeduction: {
    type: String
  },
  netInHand: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

payrollScrollSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      scrollNo: this.scrollNo,
      partyId: this.partyId,
      payGradeId: this.payGradeId,
      payGrade: this.payGrade,
      partyDetails: this.partyDetails,
      department: this.department,
      PresentDays: this.PresentDays,
      PaidDays: this.PaidDays,
      CL: this.CL,
      EL: this.EL,
      totaHrsAllowed: this.totaHrsAllowed,
      dutyHrs: this.dutyHrs,
      weeklyOff: this.weeklyOff,
      otHours: this.otHours,
      totalIncrements: this.totalIncrements,
      IncrementAmount: this.IncrementAmount,
      scale: this.scale,
      HRADeduction: this.HRADeduction,
      HRA: this.HRA,
      DA: this.DA,
      SA: this.SA,
      OTA: this.OTA,
      EPFEmployee: this.EPFEmployee,
      EPFEmployer: this.EPFEmployer,
      loanRecovery: this.loanRecovery,
      CTC: this.CTC,
      totalDeduction: this.totalDeduction,
      netInHand: this.netInHand,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PayrollScroll', payrollScrollSchema)

export const schema = model.schema
export default model
