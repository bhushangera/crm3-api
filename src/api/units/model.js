import mongoose, { Schema } from 'mongoose'

const unitsSchema = new Schema({
  unitId: {
    type: String
  },
  group: {
    type: String
  },
  unit: {
    type: String
  },
  symbol: {
    type: String
  },
  slug: {
    type: String
  },
  trivia: {
    type: String
  },
  pi: {type: Boolean, default: false},
  quotation: {type: Boolean, default: false},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

unitsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      unitId: this.unitId,
      group: this.group,
      unit: this.unit,
      symbol: this.symbol,
      slug: this.slug,
      trivia: this.trivia,
      pi: this.pi,
      quotation: this.quotation,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Units', unitsSchema)

export const schema = model.schema
export default model
