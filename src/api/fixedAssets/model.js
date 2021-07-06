import mongoose, { Schema } from 'mongoose'

const fixedAssetsSchema = new Schema({
  fAssetId: { type: String },
  fixedAssetTypeId: { type: String },
  fixedAssetType: {type: String },
  assetName: {type: String },
  dateAcquired: { type: Date },
  inWarranty: { type: Boolean, default: false },
  warrantyExpDate: { type: Date},
  dailyProductionCapacity: { type: Number },
  uomId: { type: String },
  uom: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

fixedAssetsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      fAssetId: this.fAssetId,
      fixedAssetTypeId: this.fixedAssetTypeId,
      fixedAssetType: this.fixedAssetType,
      assetName: this.assetName,
      dateAcquired: this.dateAcquired,
      inWarranty: this.inWarranty,
      warrantyExpDate: this.warrantyExpDate,
      dailyProductionCapacity: this.dailyProductionCapacity,
      uomId: this.uomId,
      uom: this.uom,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('FixedAssets', fixedAssetsSchema)

export const schema = model.schema
export default model
