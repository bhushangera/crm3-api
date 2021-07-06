import mongoose, { Schema } from 'mongoose'

const accountSchema = new Schema({
  accountTypeId: {
    type: String
  },
  accountType: {
    type: String
  },
  code: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

accountSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      accountTypeId: this.accountTypeId,
      accountType: this.accountType,
      code: this.code,
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

const model = mongoose.model('Account', accountSchema)

export const schema = model.schema
export default model
