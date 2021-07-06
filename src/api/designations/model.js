import mongoose, { Schema } from 'mongoose'

const designationsSchema = new Schema({
  deptId: {type: String, trim: true},
  deptName: {type: String, trim: true},
  buId: {type: String, trim: true},
  buName: {type: String, trim: true},
  companyId: {type: String, trim: true},
  companyName: {type: String, trim: true},
  code: {type: String, trim: true},
  description: {type: String, trim: true},
  active: {type: Boolean, default: true}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

designationsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      deptId: this.deptId,
      deptName: this.deptName,
      buId: this.buId,
      buName: this.buName,
      companyId: this.companyId,
      companyName: this.companyName,
      code: this.code,
      description: this.description,
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

const model = mongoose.model('Designations', designationsSchema)

export const schema = model.schema
export default model
