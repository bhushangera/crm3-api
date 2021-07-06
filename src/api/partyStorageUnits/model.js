import mongoose, { Schema } from 'mongoose'

const partyStorageUnitsSchema = new Schema({
  partyId: {type: String },
  partyDetails: {type: String},
  SUTypeId: {type: String},
  SUTypeCode: { type: String },
  code: { type: String },
  description: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

partyStorageUnitsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      partyId: this.partyId,
      partyDetails: this.partyDetails,
      SUTypeId: this.SUTypeId,
      SUTypeCode: this.SUTypeCode,
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

const model = mongoose.model('PartyStorageUnits', partyStorageUnitsSchema)

export const schema = model.schema
export default model
