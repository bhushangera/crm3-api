import mongoose, { Schema } from 'mongoose'

const sendMailSchema = new Schema({
  mailDate: {
    type: String
  },
  from: {
    type: String
  },
  senderId: {
    type: String
  },
  to: {
    type: String
  },
  receiverId: {
    type: String
  },
  subject: {
    type: String
  },
  text: {
    type: String
  },
  receiverName: {
    type: String
  },
  deleted: {
    type: String, default: false
  },
  read: {
    type: Boolean, default: false
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

sendMailSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      mailDate: this.mailDate,
      from: this.from,
      senderId: this.senderId,
      to: this.to,
      receiverId: this.receiverId,
      receiverName: this.receiverName,
      subject: this.subject,
      text: this.body,
      deleted: this.deleted,
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

const model = mongoose.model('SendMail', sendMailSchema)

export const schema = model.schema
export default model
