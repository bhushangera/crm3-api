import mongoose, { Schema } from 'mongoose'

const shoppingCartSchema = new Schema({
  dateAdded: {type: Date},
  partyId: {type: String},
  PIId: {type: String},
  MCode: {type: String},
  image: {type: String},
  Price: {type: Number, default: 0},
  GSTAmount: {type: Number, default: 0},
  Qty: {type: Number, default: 0},
  PI: {type: String},
  totalAmount: {type: Number, default: 0},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

shoppingCartSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      dateAdded: this.dateAdded,
      partyId: this.partyId,
      PIId: this.PIId,
      MCode: this.MCode,
      image: this.image,
      Price: this.Price,
      GSTAmount: this.GSTAmount,
      Qty: this.Qty,
      PI: this.PI,
      totalAmount: this.totalAmount,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ShoppingCart', shoppingCartSchema)

export const schema = model.schema
export default model
