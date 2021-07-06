import mongoose, { Schema } from 'mongoose'

const ticketsSchema = new Schema({
  TicketId: { type: String },
  ticketTypeId: { type: String },
  ticketType: { type: String },
  scrollNo: { type: String },
  recordDate: {  type: String },
  creatorParty: {type: String },
  forParty: { type: String },
  description: { type: String },
  closed: { type: Boolean, default: false },
  closedDate: {  type: Date },
  poId: { type: String},
  piId: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

ticketsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      TicketId: this.ticketId,
      ticketTypeId: this.ticketTypeId,
      ticketType: this.ticketType,
      scrollNo: this.scrollNo,
      recordDate: this.recordDate,
      creatorParty: this.creatorParty,
      forParty: this.forParty,
      description: this.description,
      closed: this.closed,
      closedDate: this.closedDate,
      poId: this.poId,
      piId: this.piId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Tickets', ticketsSchema)

export const schema = model.schema
export default model
