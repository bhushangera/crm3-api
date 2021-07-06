import mongoose, { Schema } from 'mongoose'

const tcitiesSchema = new Schema({
  territoryId: {
    type: String
  },
  cityId: {
    type: String
  },
  cityName: {
    type: String
  },
  country_id: {
    type: String
  },
  country_name: {
    type: String
  },
  state_id: {
    type: String
  },
  state_name: {
    type: String
  },
  territory_code: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

tcitiesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      territoryId: this.territoryId,
      cityId: this.cityId,
      cityName: this.cityName,
      country_id: this.country_id,
      country_name: this.country_name,
      state_id: this.state_id,
      state_name: this.state_name,
      territory_code: this.territory_code,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Tcities', tcitiesSchema)

export const schema = model.schema
export default model
