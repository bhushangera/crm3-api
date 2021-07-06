import mongoose, { Schema } from 'mongoose'

const locationsSchema = new Schema({
  territoryId: {type: String},
  region: { type: String },
  country: { type: String },
  stateId: { type: String },
  state: { type: String},
  location: { type: String },
  territory: { type: String },
  pinCode: { type: Number },
  kmFromNC: { type: Number },
  kmFromHO: {type: Number},
  slug: {type: String},

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

locationsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      territoryId: this.territoryId,
      stateId: this.stateId,
      region: this.region,
      country: this.country,
      state: this.state,
      location: this.location,
      territory: this.territory,
      pinCode: this.pinCode,
      kmFromNC: this.kmFromNC,
      kmFromHO: this.kmFromHO,
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Locations', locationsSchema)

export const schema = model.schema
export default model
