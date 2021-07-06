import mongoose, { Schema } from 'mongoose'
import ShadeSwatches from '../shadeSwatches/model'
import Warehouse from '../Warehouse/model'

const skuSchema = new Schema(
  {
    uuid: { type: String, trim: true },
    materialId: { type: String, trim: true },
    materialCode: { type: String, trim: true },
    materialDescription: { type: String, trim: true },
    groupId: { type: String, trim: true },
    groupCode: { type: String, trim: true },
    groupType: { type: String, trim: true },

    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },

    entityCategoryId: { type: String, trim: true },
    entityCategoryCode: { type: String, trim: true },

    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },

    HSNCode: { type: String, trim: true },
    unit: { type: String, trim: true },
    // costFactor: costFactorsSchema,
    DNo: { type: String, trim: true },
    DName: { type: String, trim: true },
    displayName: { type: String, trim: true }, //
    hasShades: { type: Boolean, default: false },
    hasShade: { type: Boolean, default: false },
    hasRAL: { type: Boolean, default: false },
    makeId: { type: String, trim: true }, // to be fetched from materials
    makeImage: { type: String, trim: true },
    makeCode: { type: String, trim: true },
    seriesId: { type: String, trim: true },
    seriesCode: { type: String, trim: true },
    seriesDescription: { type: String, trim: true },
    pDiscount: { type: Number, default: 0 },
    shades: [ShadeSwatches.schema],
    shade: ShadeSwatches.schema,
    image: { type: String, trim: true },
    isInventory: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    premium: { type: Boolean, default: false },
    panelSize: { type: String, trim: true },
    height: { type: Number, default: 0 },
    width: { type: Number, default: 0 },
    depth: { type: Number, default: 0 },
    thickness: { type: Number, default: 0 },
    effThickness: { type: Number, default: 0 },
    sqft: { type: Number, default: 0 },
    // shades
    listPrice: { type: Number, default: 0 },
    purchasePrice: { type: Number, default: 0 },

    invProps: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
      reorder: { type: Number, default: 0 },
      reorderQty: { type: Number, default: 0 },
      leadTime: { type: Number, default: 0 },
      hasShelfLife: { type: Boolean, default: false },
      shelfLife: { type: Number, default: 0 },
      hasBatchCode: { type: Boolean, default: false },
      hasSerialNo: { type: Boolean, default: false },
      warehouse: Warehouse.schema,
      location: { type: String, trim: true },
      // suppliers: [supplierDetailsSchema],
      // supplier: supplierDetailsSchema,
      remarks: { type: String, trim: true }
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

skuSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      materialId: this.materialId,
      materialCode: this.materialCode,
      materialDescription: this.materialDescription,
      groupId: this.groupId,
      groupCode: this.groupCode,
      groupType: this.groupType,
      entityId: this.entityId,
      entityCode: this.entityCode,
      entityCategoryId: this.entityCategoryId,
      entityCategoryCode: this.entityCategoryCode,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      costFactor: this.costFactor,
      skuClassification: this.skuClassification,
      DNo: this.DNo,
      DName: this.DName,
      displayName: this.displayName,
      hasShades: this.hasShades,
      hasShade: this.hasShade,
      hasRAL: this.hasRAL,
      makeId: this.makeId,
      makeImage: this.makeImage,
      makeCode: this.makeCode,
      seriesId: this.seriesId,
      seriesCode: this.seriesCode,
      seriesDescription: this.seriesDescription,
      shades: this.shades,
      shade: this.shade,
      unit: this.unit,
      image: this.image,
      isInventory: this.isInventory,
      active: this.active,
      premium: this.premium,
      panelSize: this.panelSize,
      unitGroup: this.unitGroup, // length , mass, volume
      height: this.height,
      width: this.width,
      depth: this.depth,
      thickness: this.thickness,
      effThickness: this.effThickness,
      sqft: this.sqft,

      // shades
      listPrice: this.listPrice,
      purchasePrice: this.purchasePrice,
      invProps: this.invProps,
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

const model = mongoose.model('Sku', skuSchema)

export const schema = model.schema
export default model
