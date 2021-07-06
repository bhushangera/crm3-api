import mongoose, { Schema } from 'mongoose'

const leadTrackSchema = new Schema({
  leadId: { type: String },
  userId: { type: String },
  trackDate: { type: Date },
  trackedBy: { type: String },
  remarks: { type: String },
  userName: { type: String },
  nextReminder: { type: String },
  managerId: {type: String}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

leadTrackSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      leadId: this.leadId,
      userId: this.userId,
      trackDate: this.trackDate,
      trackedBy: this.trackedBy,
      remarks: this.remarks,
      userName: this.userName,
      nextReminder: this.nextReminder,
      managerId: this.managerId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('LeadTrack', leadTrackSchema)

export const schema = model.schema
export default model
