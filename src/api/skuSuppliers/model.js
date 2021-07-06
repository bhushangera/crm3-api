import mongoose, { Schema } from 'mongoose'

const skuSuppliersSchema = new Schema({
  SKUId: {type: String},
  partyId: {type: String },
  leadTime: {type: Number, default: 0 },
  ratingId: {type: String },
  stars: {type: Number, default: 0 },
  rating: { type: String },
  priority: {type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

skuSuppliersSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      SKUId: this.SKUId,
      partyId: this.partyId,
      leadTime: this.leadTime,
      ratingId: this.ratingId,
      stars: this.stars,
      rating: this.rating,
      priority: this.priority,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('SkuSuppliers', skuSuppliersSchema)

export const schema = model.schema
export default model
