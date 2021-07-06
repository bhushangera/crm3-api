import mongoose, { Schema } from 'mongoose'

const fixedAssetMaintenanceSchema = new Schema({
  fAssetId: { type: Date },
  recordDate: { type: Date },
  lastServiceDate: { type: Date },
  nextDueDays: { type: Number },
  serviceDueDate: { type: Date },
  sericeComments: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

fixedAssetMaintenanceSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      fAssetId: this.fAssetId,
      recordDate: this.recordDate,
      lastServiceDate: this.lastServiceDate,
      nextDueDays: this.nextDueDays,
      serviceDueDate: this.serviceDueDate,
      sericeComments: this.sericeComments,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('FixedAssetMaintenance', fixedAssetMaintenanceSchema)

export const schema = model.schema
export default model
