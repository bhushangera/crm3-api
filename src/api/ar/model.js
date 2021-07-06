import mongoose, { Schema } from 'mongoose'

const arSchema = new Schema({
  SKUId: {type: String },
  image: { type: String },
  SKU: { type: String },
  CQty: {type: Number, default: 0 },
  Wastage: { type: Number, default: 0 },
  UMOId: { type: String},
  UOM: {type: String },
  Qty: { type: Number, default: 0 }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

arSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      SKUId: this.SKUId,
      image: this.image,
      SKU: this.SKU,
      CQty: this.CQty,
      Wastage: this.Wastage,
      UMOId: this.UMOId,
      UOM: this.UOM,
      Qty: this.Qty,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Ar', arSchema)

export const schema = model.schema
export default model
