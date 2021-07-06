import mongoose, { Schema } from 'mongoose'

const performanceRatingSchema = new Schema({
  stars: {type: Number, drfault: 0},
  rating: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

performanceRatingSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      stars: this.stars,
      rating: this.rating,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PerformanceRating', performanceRatingSchema)

export const schema = model.schema
export default model
