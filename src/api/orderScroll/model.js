import mongoose, { Schema } from 'mongoose'

const orderScrollSchema = new Schema(
  {
    orderId: { type: String },
    PI: { type: String },
    PIId: { type: String },
    MCode: { type: String },
    image: { type: String },
    Price: { type: Number, default: 0 },
    GSTAmount: { type: Number, default: 0 },
    Qty: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 }
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

orderScrollSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      orderId: this.orderId,
      PI: this.PI,
      PIId: this.PIId,
      MCode: this.MCode,
      image: this.image,
      Price: this.Price,
      GSTAmount: this.GSTAmount,
      Qty: this.Qty,
      totalAmount: this.totalAmount,
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

const model = mongoose.model('OrderScroll', orderScrollSchema)

export const schema = model.schema
export default model
