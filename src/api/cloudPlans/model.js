import mongoose, { Schema } from 'mongoose'

const cloudPlansSchema = new Schema({
  code: {type: String, trim: true},
  description: {type: String, trim: true},
  ram: {type: Number, default: 0},
  cpu: {type: Number, default: 0},
  hdd: {type: Number, default: 0},
  bandwidth: {type: Number, default: 0},
  validity: {type: Number, default: 0},
  USD: {type: Number, default: 0},
  INR: {type: Number, default: 0},
  backupAddition: {type: Number, default: 0},
  users: {type: Number, default: 0},
  active: {type: Boolean, default: true}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

cloudPlansSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      ram: this.ram,
      cpu: this.cpu,
      hdd: this.hdd,
      bandwidth: this.bandwidth,
      validity: this.validity,
      USD: this.USD,
      INR: this.INR,
      backupAddition: this.backupAddition,
      active: this.active,
      users: this.users,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('CloudPlans', cloudPlansSchema)

export const schema = model.schema
export default model
