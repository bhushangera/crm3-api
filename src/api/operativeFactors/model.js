import mongoose, { Schema } from 'mongoose'

const operativeFactorsSchema = new Schema({
  entityId: {type: String, trim: true},
  entityCode: {type: String, trim: true},
  categoryId: {type: String, trim: true},
  category: {type: String, trim: true},
  categoryCodeId: {type: String, trim: true},
  categoryCode: {type: String, trim: true},
  code: { type: String, trim: true },
  uuid: { type: String, trim: true },
  description: { type: String, trim: true },
  forexFactor: { type: Number, default: 0 },
  exportFactor: { type: Number, default: 0 },
  overheads: { type: Number, default: 0 },
  packaging: { type: Number, default: 0 },
  production: { type: Number, default: 0 },
  operativeMargin: { type: Number, default: 0 },
  dealerFactor: { type: Number, default: 0 },
  retailFactor: { type: Number, default: 0 },
  totalDomestic: { type: Number, default: 0 },
  totalExport: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
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

      uuid: this.uuid,
      entityId: this.entityId,
      entityCode: this.entityCode,
      categoryId: this.categoryId,
      category: this.category,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      code: this.code,
      description: this.description,
      forexFactor: this.forexFactor,
      exportFactor: this.exportFactor,
      overheads: this.overheads,
      packaging: this.packaging,
      production: this.production,
      operativeMargin: this.operativeMargin,
      dealerFactor: this.dealerFactor,
      retailFactor: this.retailFactor,
      totalDomestic: this.totalDomestic,
      totalExport: this.totalExport,
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
