import mongoose, { Schema } from 'mongoose'

const territoriesSchema = new Schema(
  {
    code: { type: String },
    name: { type: String },
    stateId: { type: String },
    state: { type: String },
    country: { type: String }
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

territoriesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      name: this.name,
      stateId: this.stateId,
      state: this.state,
      country: this.country,
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

const model = mongoose.model('Territories', territoriesSchema)

export const schema = model.schema
export default model
