import mongoose, { Schema } from 'mongoose'

const dpCategoriesSchema = new Schema({
  category: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

dpCategoriesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      category: this.category,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('DpCategories', dpCategoriesSchema)

export const schema = model.schema
export default model
