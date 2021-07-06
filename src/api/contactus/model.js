import mongoose, { Schema } from 'mongoose'

const contactusSchema = new Schema({
  name: { type: String },
  email: { type: String  },
  subject: {  type: String  },
  telephone: {  type: String },
  message: { type: String },
  read: {type: Boolean, default: false}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

contactusSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      email: this.email,
      subject: this.subject,
      telephone: this.telephone,
      message: this.message,
      read: this.read,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Contactus', contactusSchema)

export const schema = model.schema
export default model
