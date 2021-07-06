import mongoose, { Schema } from 'mongoose'

const teritoriesSchema = new Schema({
  code: { type: String }, // eg. HSR
  name: { type: String }, // eg. Hisar
  stateId: { type: String },
  state: { type: String },
 }, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

teritoriesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      name: this.name,
      stateId: this.stateId,
      state: this.state, 
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Teritories', teritoriesSchema)

export const schema = model.schema
export default model
