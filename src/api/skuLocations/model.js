import mongoose, { Schema } from 'mongoose'

const skuLocationsSchema = new Schema({
  SKUId: {type: String },
  SKU: {type: String },
  partyId: {type: String },
  partyDetails: { type: String },
  SUId: { type: String },
  SUCode: {type: String },
  SUPId: { type: String },
  SUPCode: { type: String },
  partitionSize: {type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

skuLocationsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      SKUId: this.SKUId,
      SKU: this.SKU,
      partyId: this.partyId,
      partyDetails: this.partyDetails,
      SUId: this.SUId,
      SUCode: this.SUCode,
      SUPId: this.SUPId,
      SUPCode: this.SUPCode,
      partitionSize: this.partitionSize,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('SkuLocations', skuLocationsSchema)

export const schema = model.schema
export default model
