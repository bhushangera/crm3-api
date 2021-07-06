import mongoose, { Schema } from 'mongoose'

const ticketGroupsSchema = new Schema({
  TicketGroupId: {type: String },
  prefix: {type: String },
  group: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

ticketGroupsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      TicketGroupId: this.TicketGroupId,
      prefix: this.prefix,
      group: this.group,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('TicketGroups', ticketGroupsSchema)

export const schema = model.schema
export default model
