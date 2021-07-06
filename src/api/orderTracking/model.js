import mongoose, { Schema } from 'mongoose'

const orderTrackingSchema = new Schema(
  {
    orderId: { type: String },
    logDate: { type: String },
    status: { type: String },
    phase: { type: String },
    trackingRemarks: { type: String }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      }
    }
  }
)

orderTrackingSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      orderId: this.orderId,
      logDate: this.logDate,
      status: this.status,
      phase: this.phase,
      trackingRemarks: this.trackingRemarks,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full
      ? {
        ...view
        // add properties for a full view
      }
      : view
  }
}

const model = mongoose.model('OrderTracking', orderTrackingSchema)

export const schema = model.schema
export default model
