import mongoose, { Schema } from 'mongoose'

const workEffortsScrollSchema = new Schema({
  WorkEffortId: {type: String },
  assignedToParty: {type: String },
  partyDetails: {type: String },
  comments: { type: String },
  fromDate: { type: Date },
  fromTime: { type: Date },
  toDate: { type: Date },
  toTime: { type: Date },
  closed: { type: Boolean, default: false },
  Remarks: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

workEffortsScrollSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      WorkEffortId: this.WorkEffortId,
      assignedToParty: this.assignedToParty,
      partyDetails: this.partyDetails,
      comments: this.comments,
      fromDate: this.fromDate,
      fromTime: this.fromTime,
      toDate: this.toDate,
      toTime: this.toTime,
      closed: this.closed,
      Remarks: this.Remarks,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('WorkEffortsScroll', workEffortsScrollSchema)

export const schema = model.schema
export default model
