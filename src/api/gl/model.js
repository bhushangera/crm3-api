import mongoose, { Schema } from 'mongoose'

const glSchema = new Schema({
  txDate: {
    type: Date, default: Date.now()
  },
  debitACId: {
    type: String
  },
  creditACId: {
    type: String
  },
  debitAC: {
    type: String
  },
  creditAC: {
    type: String
  },
  amount: {
    type: Number, default: 0
  },
  postedById: {
    type: String
  },
  postedBy: {
    type: String
  },
  approvedById: {
    type: String
  },
  approovedBy: {
    type: String
  },
  verifiedById: {
    type: String
  },
  verifiedBy: {
    type: String
  },
  vDate: {
    type: Date
  },
  aDate: {
    type: String
  },
  remarks: {
    type: String
  },
  opdId: {
    type: String
  },
  ipdId: {
    type: String
  },
  pInvId: {
    type: String
  },
  erId: {
    type: String
  },
  UHID: {
    type: String
  },
  partyId: {
    type: String
  },
  patientName: {
    type: String
  },
  bookingId: {
    type: String
  },
  partyName: {
    type: String
  },
  accountType: {
    type: String
  },
  code: {
    type: String
  },
  description: {
    type: String
  },
  txnType: {
    type: String
  },
  modified: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

glSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      txDate: this.txDate,
      debitACId: this.debitACId,
      creditACId: this.creditACId,
      debitAC: this.debitAC,
      creditAC: this.creditAC,
      amount: this.amount,
      postedById: this.postedById,
      postedBy: this.postedBy,
      approvedById: this.approvedById,
      approovedBy: this.approovedBy,
      verifiedById: this.verifiedById,
      verifiedBy: this.verifiedBy,
      vDate: this.vDate,
      aDate: this.aDate,
      remarks: this.remarks,
      opdId: this.opdId,
      ipdId: this.ipdId,
      pInvId: this.pInvId,
      erId: this.erId,
      UHID: this.UHID,
      partyId: this.partyId,
      patientName: this.patientName,
      bookingId: this.bookingId,
      partyName: this.partyName,
      accountType: this.accountType,
      code: this.code,
      description: this.description,
      txnType: this.txnType,
      modified: this.modified,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Gl', glSchema)

export const schema = model.schema
export default model
