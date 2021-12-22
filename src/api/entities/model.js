import mongoose, { Schema } from 'mongoose'
import TaxRates from '../taxRates/model'

const entitiesSchema = new Schema(
  {
    code: { type: String },
    groupId: { type: String, trim: true },
    groupCode: { type: String, trim: true },
    groupType: { type: String, trim: true },
    description: { type: String },
    icon: { type: String },
    colorId: { type: String },
    background: { type: String },
    foreground: { type: String },
    prefix: { type: String },
    active: { type: Boolean, default: true },
    hasState: { type: Boolean, default: false },
    hasCategories: { type: Boolean, default: false },
    image: { type: String, trim: true },
    definition: { type: String, trim: true },
    notes: { type: String, trim: true },
    terms: { type: String, trim: true },
    unit: { type: String, trim: true },
    calculate: { type: Boolean, default: false },
    taxId: { type: String, trim: true },
    tax: TaxRates.schema,
    componentStandards: {
      bcHeight: {type: Number, default: 0},
      wcHeight: {type: Number, default: 0},
      bcDepth: {type: Number, default: 0},
      wcDepth: {type: Number, default: 0}
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      }
    }
  }
)

entitiesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      groupId: this.groupId,
      groupCode: this.groupCode,
      groupType: this.groupType,
      description: this.description,
      icon: this.icon,
      colorId: this.colorId,
      background: this.background,
      foreground: this.foreground,
      prefix: this.prefix,
      active: this.active,
      hasState: this.hasState,
      hasCategories: this.hasCategories,
      image: this.image,
      definition: this.definition,
      notes: this.notes,
      terms: this.terms,
      unit: this.unit,
      calculate: this.calculate,
      taxId: this.taxId,
      tax: this.tax,
      componentStandards: this.componentStandards,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full
      ? {
        ...view
        // add properties for a full view
      }
      : view
  }
}

const model = mongoose.model('Entities', entitiesSchema)

export const schema = model.schema
export default model
