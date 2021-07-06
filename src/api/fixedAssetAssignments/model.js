import mongoose, { Schema } from 'mongoose'

const fixedAssetAssignmentsSchema = new Schema({
  wordEffortId: { type: String },
  fromDate: { type: Date },
  fromTime: { type: Date },
  toDate: { type: Date },
  toTime: { type: Date },
  remarks: { type: String },
  status: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

fixedAssetAssignmentsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      wordEffortId: this.wordEffortId,
      fromDate: this.fromDate,
      fromTime: this.fromTime,
      toDate: this.toDate,
      toTime: this.toTime,
      remarks: this.remarks,
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

const model = mongoose.model('FixedAssetAssignments', fixedAssetAssignmentsSchema)

export const schema = model.schema
export default model
