import mongoose, { Schema } from 'mongoose'

const dlrProductsSchema = new Schema({
  dpCategoryId: {
    type: String
  },
  product: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

dlrProductsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      dpCategoryId: this.dpCategoryId,
      product: this.product,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('DlrProducts', dlrProductsSchema)

export const schema = model.schema
export default model
