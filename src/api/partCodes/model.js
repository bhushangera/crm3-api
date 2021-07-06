import mongoose, { Schema } from 'mongoose'

const partCodesSchema = new Schema({
  partCategoryId: { type: String },
  partCode: { type: String },
  category: {type: String},
  shortCode: { type: String },
  MINIFIXACId: { type: String },
  MINIFIXSKU: { type: String },
  kitchenOnly: {  type: Boolean, default: false },
  carcaseOnly: {  type: Boolean, default: false },
  shutterOnly: {  type: Boolean, default: false },
  hasPriceTag: {  type: Boolean, default: false },
  dealerPrice: { type: Number, default: 0 },
  customerPrice: { type: Number, default: 0 },
  landingPrice: { type: Number, default: 0 },
  miniFix: { type: Number, default: 0 },
  gst: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

partCodesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      partCategoryId: this.partCategoryId,
      partCode: this.partCode,
      shortCode: this.shortCode,
      kitchenOnly: this.kitchenOnly,
      carcaseOnly: this.carcaseOnly,
      shutterOnly: this.shutterOnly,
      gst: this.gst,  
      dealerPrice: this.dealerPrice,
      customerPrice: this.customerPrice,
      landingPrice: this.landingPrice, 
      hasPriceTag: this.hasPriceTag,
      miniFix: this.miniFix,
      category: this.category,
      MINIFIXACId: this.MINIFIXACId,
      MINIFIXSKU: this.MINIFIXSKU,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PartCodes', partCodesSchema)

export const schema = model.schema
export default model
