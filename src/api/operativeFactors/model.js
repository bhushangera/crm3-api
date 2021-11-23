import mongoose, { Schema } from 'mongoose'

const operativeFactorsSchema = new Schema({
  entityId: { type: String, trim: true },
  entityCode: { type: String, trim: true },
  categoryId: { type: String, trim: true },
  category: { type: String, trim: true },
  categoryCodeId: { type: String, trim: true },
  categoryCode: { type: String, trim: true },
  code: { type: String, trim: true },
  uuid: { type: String, trim: true },
  description: { type: String, trim: true },
  productionCostPSF: { type: Number, default: 0 },
  productionCostPP: { type: Number, default: 0 },
  packingFactor: { type: Number, default: 0 },
  dealerFactor: { type: Number, default: 0 },
  retailFactor: { type: Number, default: 0 },
  exportFactor: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

operativeFactorsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,

      entityId: this.entityId,
      entityCode: this.entityCode,
      categoryId: this.categoryId,
      category: this.category,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      code: this.code,
      uuid: this.uuid,
      description: this.description,
      productionCostPSF: this.productionCostPSF,
      productionCostPP: this.productionCostPP,
      packingFactor: this.packingFactor,
      dealerFactor: this.dealerFactor,
      retailFactor: this.retailFactor,
      exportFactor: this.exportFactor,
      active: this.active,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('OperativeFactors', operativeFactorsSchema)

export const schema = model.schema
export default model
