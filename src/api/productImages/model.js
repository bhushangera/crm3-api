import mongoose, { Schema } from 'mongoose'

const productImagesSchema = new Schema({
  productId: {
    type: String
  },
  image: {
    type: String
  },
  isPrimary: {
    type: Boolean, default: false
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

productImagesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      productId: this.productId,
      image: this.image,
      isPrimary: this.isPrimary,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ProductImages', productImagesSchema)

export const schema = model.schema
export default model
