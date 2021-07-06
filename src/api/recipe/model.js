import mongoose, { Schema } from 'mongoose'

const recipeSchema = new Schema({
  articleId: { type: String },
  articleCode: { type: String },
  articleDescription: { type: String },
  consumableId: { type: String },
  consumableCode: { type: String },
  wPercent: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
  unit: { type: String },
  calculateBy: { type: String },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

recipeSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      articleId: this.articleId,
      articleCode: this.articleCode,
      articleDescription: this.articleDescription,
      consumableId: this.consumableId,
      consumableCode: this.consumableCode,
      wPercent: this.wPercent,
      qty: this.qty,
      unit: this.unit,
      calculateBy: this.calculateBy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Recipe', recipeSchema)

export const schema = model.schema
export default model
