import mongoose, { Schema } from 'mongoose'

const jdSchema = new Schema({
  jd: {type: String},
  level: {type: String},
  description: {type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

jdSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      jd: this.jd,
      level: this.level,
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

const model = mongoose.model('Jd', jdSchema)

export const schema = model.schema
export default model
