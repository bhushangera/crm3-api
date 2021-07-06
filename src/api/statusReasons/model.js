import mongoose, { Schema } from 'mongoose'

const statusReasonsSchema = new Schema({
  code: { type: String },
  sortOrder: { type: Number },
  description: { type: String },
  statusId: {type: String},
  statusCode: {type: String},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

statusReasonsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      sortOrder: this.sortOrder,
      statusId: this.statusId,
      statusCode: this.statusCode,
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

const model = mongoose.model('StatusReasons', statusReasonsSchema)

export const schema = model.schema
export default model
