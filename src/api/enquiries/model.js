import mongoose, { Schema } from 'mongoose'

const enquiriesSchema = new Schema({
  enqDate: {type: String},
  userId: {type: String},
  partyId: {type: String},
  partyDetails: {type: String},
  subject: {type: String},
  dpCategoryId: {type: String},
  dlrProductId: {type: String},
  text: {type: String},
  fixPartitions: {type: Number, default:0},
  loosePartitons: {type: Number, default:0},
  drwInnotech: {type: Number, default:0},
  drwTelescopic: {type: Number, default:0},
  drwQuaddro: {type: Number, default:0},
  bcDepth: {type: Number, default:0},
  wcDepth: {type: Number, default:0},
  fresh: {type: Boolean, default: true},
  piSent: {type: Boolean, default: false},
  confirmed: {type: Boolean, default: false},
  productName: {type: String},

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

enquiriesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      enqDate: this.enqDate,
      userId: this.userId,
      partyId: this.partyId,
      partyDetails: this.partyDetails,
      subject: this.subject,
      dpCategoryId: this.dpCategoryId,
      dlrProductId: this.dlrProductId,
      text: this.text,
      fixPartitions: this.fixPartitions,
      loosePartitons: this.loosePartitons,
      drwInnotech: this.drwInnotech,
      drwTelescopic: this.drwTelescopic,
      drwQuaddro: this.drwQuaddro,
      bcDepth: this.bcDepth,
      wcDepth: this.wcDepth,
      fresh: this.fresh,
      piSent: this.piSent,
      confirmed: this.confirmed,
      productName: this.productName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Enquiries', enquiriesSchema)

export const schema = model.schema
export default model
