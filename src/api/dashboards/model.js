import mongoose, { Schema } from 'mongoose'

const dashboardsSchema = new Schema({
  code: {
    type: String
  },
  description: {
    type: String
  },
  path: {
    type: String
  },
  active: {
    type: Boolean, default: false
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

dashboardsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      path: this.path,
      active: this.active,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Dashboards', dashboardsSchema)

export const schema = model.schema
export default model
