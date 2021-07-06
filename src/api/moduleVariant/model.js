import mongoose, { Schema } from 'mongoose'
import Make from '../make/model'
// import CategoryCodes from "../CategoryCodes/model";
// import Materials from '../materials/model'
// import Sku from '../sku/model'
import OperativeFactors from '../operativeFactors/model'
export const skuDetailsSchema = new Schema({
  id: { type: String, trim: true },
  uuid: { type: String, trim: true },
  HSNCode: { type: String, trim: true },
  unit: { type: String, trim: true },
  DNo: { type: String, trim: true },
  DName: { type: String, trim: true },
  displayName: { type: String, trim: true }, //
  hasShades: { type: Boolean, default: false },
  hasShade: { type: Boolean, default: false },
  hasRAL: { type: Boolean, default: false },
  makeId: { type: String, trim: true }, // to be fetched from materials
  makeImage: { type: String, trim: true },
  makeCode: { type: String, trim: true },
  pDiscount: { type: Number, default: 0 },
  image: { type: String, trim: true },
  premium: { type: Boolean, default: false },
  listPrice: { type: Number, default: 0 },
  purchasePrice: { type: Number, default: 0 },
  panelSize: { type: String, trim: true },
  height: { type: Number, default: 0 },
  width: { type: Number, default: 0 },
  depth: { type: Number, default: 0 },
  thickness: { type: Number, default: 0 },
  effThickness: { type: Number, default: 0 },
  sqft: { type: Number, default: 0 }
})
const carcassSchema = new Schema({
  lamination: { type: String, trim: true },
  laminationType: { type: String, trim: true },
  edging: { type: String, trim: true },
  FEBMaterialId: { type: String, trim: true },
  BEBMaterialId: { type: String, trim: true },

  EBMakeId: { type: String, trim: true },

  FEBSKUId: { type: String, trim: true },
  FEBSKU: skuDetailsSchema,
  BEBSKUId: { type: String, trim: true },
  BEBSKU: skuDetailsSchema,

  FEBThickness: { type: Number, default: 0 },
  BEBThickness: { type: Number, default: 0 },
  baseMaterialId: { type: String, trim: true },
  baseMakeId: { type: String, trim: true },
  baseMaterialThickness: { type: Number, default: 0 },
  baseSKUId: { type: String, trim: true },
  baseSKU: skuDetailsSchema,

  backMaterialId: { type: String, trim: true },
  backMakeId: { type: String, trim: true },
  backMaterialThickness: { type: Number, default: 0 },
  backSKUId: { type: String, trim: true },
  backSKU: skuDetailsSchema,

  finishMaterialId: { type: String, trim: true },
  finishMakeId: { type: String, trim: true },
  finishMaterialThickness: { type: Number, default: 0 },
  finishSKUId: { type: String, trim: true },
  finishSKU: skuDetailsSchema,

  glassMaterialId: { type: String, trim: true },
  glassMakeId: { type: String, trim: true },
  glassThickness: { type: Number, default: 0 },
  glassSKUId: { type: String, trim: true },
  glassSKU: skuDetailsSchema,

  baseThickness: { type: Number, default: 0 },
  backThickness: { type: Number, default: 0 },

  stdWidth: { type: Number, default: 600 },
  widthPlus: { type: Number, default: 10 },
  shelfRate: { type: Number, default: 0 },
  splBackPlus: { type: Number, default: 0 },
  drwHeight: { type: Number, default: 300 },
  drwHTPlus: { type: Number, default: 0 },
  drawerUnit: { type: String, trim: true, default: 'each' },
  drwRate900: { type: Number, default: 0 },
  drwRate1200: { type: Number, default: 0 },
  stripRate: { type: Number, default: 0 },
  billingUnit: { type: String, trim: true },
  stripUnit: { type: String, trim: true, default: 'rft' },
  hlPlus: { type: Number, default: 50 },
  rawBoard: { type: Number, default: 0 },
  stripWidth: { type: Number, default: 100 }
})

const shutterSchema = new Schema({
  lamination: { type: String, trim: true },
  construction: { type: String, trim: true }, // flat, sandwitch, wooden-frame, profile-frame,
  frontLamination: { type: String, trim: true },
  backLamination: { type: String, trim: true },
  edging: { type: String, trim: true },
  EBMaterialId: { type: String, trim: true },
  EBMakeId: { type: String, trim: true },
  EBWidth: { type: String, trim: true },
  EBThickness: { type: String, trim: true },
  EBSKUId: { type: String, trim: true },

  IPMaterialId: { type: String, trim: true },
  IPHandleMaterialId: { type: String, trim: true },
  IPMakeId: { type: String, trim: true },
  IPWidth: { type: String, trim: true },
  IPThickness: { type: String, trim: true },
  IPSKUId: { type: String, trim: true },

  glassMaterialId: { type: String, trim: true },
  glassMakeId: { type: String, trim: true },
  glassSKUId: { type: String, trim: true },
  glassThickness: { type: Number, default: 0 },
  // wooden shutter
  baseMaterialId: { type: String, trim: true },
  baseMakeId: { type: String, trim: true },
  baseMaterialThickness: { type: String, trim: true },
  baseSKUId: { type: String, trim: true },

  backMaterialId: { type: String, trim: true },
  backMakeId: { type: String, trim: true },
  backMaterialThickness: { type: String, trim: true },
  backSKUId: { type: String, trim: true },

  frontFinishMaterialId: { type: String, trim: true },
  frontFinishMake: [Make.schema],
  frontFinishThickness: { type: String, trim: true },

  backFinishMaterialId: { type: String, trim: true },
  backFinishMakeId: { type: String, trim: true },
  backFinishThickness: { type: String, trim: true },
  backFinishSKUId: { type: String, trim: true },

  panelMakeId: { type: String, trim: true },
  panelThickness: { type: String, trim: true },
  panelMaterialId: { type: String, trim: true },
  // panelSKUId: {type: String, trim: true},

  baseProfileMaterialId: { type: String, trim: true },
  handleProfileMaterialId: { type: String, trim: true },
  profileMakeId: { type: String, trim: true },
  profileWidth: { type: String, trim: true },

  paintMaterialId: { type: String, trim: true },
  paintMakeId: { type: String, trim: true },
  paintSKUId: { type: String, trim: true },

  topCoatMaterialId: { type: String, trim: true },
  topCoatMakeId: { type: String, trim: true },
  topCoatSKUId: { type: String, trim: true },

  backCoatMaterialId: { type: String, trim: true },
  backCoatMakeId: { type: String, trim: true },
  backCoatSKUId: { type: String, trim: true },

  shutterThickness: { type: Number, default: 0 },
  frameWidth: { type: Number, default: 0 },
  // riders
  exposedSide: { type: Number, default: 0 },
  exposedPanel: { type: Number, default: 0 },
  cncDesign: { type: Number, default: 0 },
  cncHandleStd: { type: Number, default: 0 },
  cncHandlePremium: { type: Number, default: 0 },
  SBSLPlus: { type: Number, default: 0 },
  EPHStd: { type: Number, default: 0 },
  EPHPremium: { type: Number, default: 0 },
  premiumTape: { type: Number, default: 0 },
  PWEdgeStd: { type: Number, default: 0 },
  PWEdgePremium: { type: Number, default: 0 },
  premiumProfile: { type: Number, default: 0 }
})

const moduleVariantSchema = new Schema(
  {
    uuid: { type: String, trim: true },
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    categoryId: { type: String, trim: true },
    category: { type: String, trim: true },
    categoryDescription: { type: String, trim: true },
    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },
    categoryCodeDescription: { type: String, trim: true },
    image: { type: String, trim: true },
    code: { type: String, trim: true }, // mdf carcase
    description: { type: String, trim: true }, // postlam mdf carcase with 18mm base and 8 mm back, suede finish
    remarks: { type: String, trim: true }, // postlam mdf carcase with 18mm base and 8 mm back, suede finish

    active: { type: Boolean, default: true },
    costing: { type: Number, default: 0 }, // base raw material cost
    operativeFactorId: { type: String, trim: true },
    operativeFactor: OperativeFactors.schema,
    baseRate: { type: String, trim: true },
    dealerRate: { type: String, trim: true },
    retailRate: { type: String, trim: true },
    billingUnit: { type: String, trim: true },
    // carcass
    carcass: carcassSchema,
    shutter: shutterSchema
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

moduleVariantSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      entityId: this.entityId,
      entityCode: this.entityCode,
      categoryId: this.categoryId,
      category: this.category,
      categoryDescription: this.categoryDescription,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      categoryCodeDescription: this.categoryCodeDescription,
      image: this.image,
      code: this.code,
      description: this.description,
      remarks: this.remarks,
      // image: this.// image,
      active: this.active,
      costing: this.costing,
      operativeFactorId: this.operativeFactorId,
      operativeFactor: this.operativeFactor,
      baseRate: this.baseRate,
      dealerRate: this.dealerRate,
      retailRate: this.retailRate,
      billingUnit: this.billingUnit,
      // carcass
      carcass: this.carcass,
      shutter: this.shutter,
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

const model = mongoose.model('ModuleVariant', moduleVariantSchema)

export const schema = model.schema
export default model
