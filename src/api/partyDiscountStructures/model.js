import mongoose, { Schema } from 'mongoose'

const partyDiscountStructuresSchema = new Schema({
  partyId: {type: String},
  MakeId: {type: String},
  MakeCode: {type: String},
  MakeImage: {type: String},
  discount: {type: Number, default: 0}

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

partyDiscountStructuresSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      partyId: this.partyId,
      MakeId: this.MakeId,
      MakeCode: this.MakeCode,
      MakeImage: this.MakeImage,
      discount: this.discount,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PartyDiscountStructures', partyDiscountStructuresSchema)

export const schema = model.schema
export default model
