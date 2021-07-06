import mongoose, { Schema } from 'mongoose'

const ticketTypesSchema = new Schema({
  TicketTypeId: {
    type: String
  },
  TicketGroupId: {
    type: String
  },
  ticketGroup: {
    type: String
  },
  code: {
    type: String
  },
  description: {
    type: String
  },
  priority: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

ticketTypesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      TicketTypeId: this.TicketTypeId,
      TicketGroupId: this.TicketGroupId,
      ticketGroup: this.ticketGroup,
      code: this.code,
      description: this.description,
      priority: this.priority,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('TicketTypes', ticketTypesSchema)

export const schema = model.schema
export default model
