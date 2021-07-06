import mongoose, { Schema } from 'mongoose'

const dummySchema = new Schema({
  first: {
    type: String
  },
  second: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

dummySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      first: this.first,
      second: this.second,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Dummy', dummySchema)

export const schema = model.schema
export default model
