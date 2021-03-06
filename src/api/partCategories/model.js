import mongoose, { Schema } from 'mongoose'

const partCategoriesSchema = new Schema({
  category: {
    type: String
  },
  code: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

partCategoriesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      category: this.category,
      code: this.code,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PartCategories', partCategoriesSchema)

export const schema = model.schema
export default model
