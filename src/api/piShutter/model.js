import mongoose, { Schema } from 'mongoose'
import ShadeSwatches from '../shadeSwatches/model'
import Make from '../make/model'
import Sku from '../sku/model'

const edgebandsSchame = new Schema({
  uuid: { type: String, trim: true },
  makeId: { type: String, trim: true },
  makeCode: { type: String, trim: true },
  makeDescription: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  logo: { type: String, trim: true },
  image: { type: String, trim: true }
})

const skuDetailsSchema = new Schema({
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
  purchasePrice: { type: Number, default: 0 }
})

const piShutterSchema = new Schema({
  itemNo: { type: Number, default: 0 },
  piId: { type: String, trim: true },
  entityId: { type: String, trim: true },
  entityCode: { type: String, trim: true },
  categoryId: { type: String, trim: true },
  category: { type: String, trim: true },
  categoryCode: { type: String, trim: true },
  categoryDescription: { type: String, trim: true },
  categoryCodeId: { type: String, trim: true },
  categoryCodeDescription: { type: String, trim: true },
  moduleVariantId: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  remarks: { type: String, trim: true },
  image: { type: String, trim: true },
  baseRate: { type: Number, default: 0 },
  billingUnit: { type: String, trim: true },
  costing: { type: Number, default: 0 },
  dealerRate: { type: Number, default: 0 },
  operativeFactorId: { type: String, trim: true },
  retailRate: { type: Number, default: 0 },

  factor: { type: Number, default: 0 },
  rate: { type: Number, default: 0 },
  shutterThickness: { type: Number, default: 0 },
  frameWidth: { type: Number, default: 0 },
  exposedSide: { type: Number, default: 0 },
  // exposedPanel: { type: Number, default: 0 },
  cncDesign: { type: Number, default: 0 },
  cncHandleStd: { type: Number, default: 0 },
  cncHandlePremium: { type: Number, default: 0 },
  SBSLPlus: { type: Number, default: 0 },
  EPHStd: { type: Number, default: 0 },
  EPHPremium: { type: Number, default: 0 },
  premiumTape: { type: Number, default: 0 },
  PWEdgeStd: { type: Number, default: 0 },
  PWEdgePremium: { type: Number, default: 0 },
  premiumProfile: { type: Number, default: 0 },
  lamination: { type: String, trim: true },
  construction: { type: String, trim: true }, // flat, sandwitch, wooden-frame, profile-frame,
  frontLamination: { type: String, trim: true },
  backLamination: { type: String, trim: true },
  edging: { type: String, trim: true },
  baseMaterialId: { type: String, trim: true },
  baseMakeId: { type: String, trim: true },
  baseMaterialThickness: { type: Number, default: 0 },
  baseSKUId: { type: String, trim: true },
  baseSKU: skuDetailsSchema, // to be filled on mv change
  backMaterialId: { type: String, trim: true },
  backMakeId: { type: String, trim: true },
  backMaterialThickness: { type: Number, default: 0 },
  backSKUId: { type: String, trim: true },
  backSKU: skuDetailsSchema, // to be filled on mv change
  frontFinishMaterialId: { type: String, trim: true },
  frontFinishThickness: { type: Number, default: 0 },
  // frontFinishMakes: [Make.schema],
  glassMaterialId: { type: String, trim: true },
  glassMakeId: { type: String, trim: true },
  glassSKUId: { type: String, trim: true },
  glassSKU: skuDetailsSchema, // to be filled on mv change
  glassThickness: { type: Number, default: 5 }, // to be filled on mv change
  EBMaterialId: { type: String, trim: true },
  EBMakeId: { type: String, trim: true },
  EBWidth: { type: Number, default: 0 },
  EBThickness: { type: Number, default: 0 },
  EBSKUId: { type: String, trim: true },
  EBSKU: skuDetailsSchema, // to be filled on mv change

  frontFinishMakeId: { type: String, trim: true }, // to be selected by user
  frontFinishMake: Make.schema, // to be selected by user
  glassRAL: { type: String, trim: true }, // to be selected by user
  frontFinishSKUId: { type: String, trim: true },
  frontFinishSKU: skuDetailsSchema, // to be selected by user
  frontShadeSwatch: ShadeSwatches.schema, // to be filled by user;
  shutterEdgeBands: edgebandsSchame,
  grains: { type: String, trim: true },
  SBSL: { type: Boolean, default: false },
  backFinishMaterialId: { type: String, trim: true },
  backFinishMakeId: { type: String, trim: true },
  backFinishThickness: { type: Number, default: 0 },
  backFinishSKUId: { type: String, trim: true },
  backFinishSKU: Sku.schema, // to be filled on mv change

  backShades: [ShadeSwatches.schema],
  backShadeSwatch: ShadeSwatches.schema, // to be selected by user

  frontRAL: { type: String, trim: true },
  backRAL: { type: String, trim: true },

  EBColor: { type: String, trim: true },
  EBSwatch: ShadeSwatches.schema,

  baseProfileMaterialId: { type: String, trim: true },
  handleProfileMaterialId: { type: String, trim: true },
  profileWidth: { type: Number, default: 0 },
  profileMakeId: { type: String, trim: true },
  baseProfileSKUId: { type: String, trim: true }, // to be selected by user
  isPremiumProfile: { type: Boolean, default: false }, // on change
  baseProfileSKU: skuDetailsSchema, // on change
  handleProfileSKUId: { type: String, trim: true },
  handleProfileSKU: skuDetailsSchema, // on change

  topCoatMaterialId: { type: String, trim: true },
  topCoatMakeId: { type: String, trim: true },
  topCoatSKUId: { type: String, trim: true },
  topCoatSKU: skuDetailsSchema,

  backCoatMaterialId: { type: String, trim: true },
  backCoatMake: { type: String, trim: true },
  backCoatSKUId: { type: String, trim: true },
  backCoatSKU: skuDetailsSchema,

  // handle and adjustments
  handleType: { type: String, trim: true }, // none, profile, cnc-std, cnc-premium, handle-less
  IPMaterialId: { type: String, trim: true },
  IPHandleMaterialId: { type: String, trim: true },
  IPMakeId: { type: String, trim: true },
  IPWidth: { type: Number, default: 0 },
  IPThickness: { type: Number, default: 0 },
  IPSKUId: { type: String, trim: true }, // to be selected by user
  IPSKU: skuDetailsSchema, // to be filled by user
  IPHandleSKUId: { type: String, trim: true },
  IPHandleSKU: skuDetailsSchema, // to be filled by user
  profileHeight: { type: Number, default: 0 },
  wallHeightAdjustment: { type: Number, default: 0 }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

piShutterSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      itemNo: this.itemNo,
      piId: this.piId,
      entityId: this.entityId,
      entityCode: this.entityCode,
      categoryId: this.categoryId,
      category: this.category,
      categoryCode: this.categoryCode,
      categoryDescription: this.categoryDescription,
      categoryCodeId: this.categoryCodeId,
      categoryCodeDescription: this.categoryCodeDescription,
      moduleVariantId: this.moduleVariantId,
      code: this.code,
      description: this.description,
      remarks: this.remarks,
      image: this.image,
      baseRate: this.baseRate,
      billingUnit: this.billingUnit,
      costing: this.costing,
      dealerRate: this.dealerRate,
      operativeFactorId: this.operativeFactorId,
      retailRate: this.retailRate,
      factor: this.factor,
      rate: this.rate,
      shutterThickness: this.shutterThickness,
      frameWidth: this.frameWidth,
      exposedSide: this.exposedSide,
      exposedPanel: this.exposedPanel,
      cncDesign: this.cncDesign,
      cncHandleStd: this.cncHandleStd,
      cncHandlePremium: this.cncHandlePremium,
      SBSLPlus: this.SBSLPlus,
      EPHStd: this.EPHStd,
      EPHPremium: this.EPHPremium,
      premiumTape: this.premiumTape,
      PWEdgeStd: this.PWEdgeStd,
      PWEdgePremium: this.PWEdgePremium,
      premiumProfile: this.premiumProfile,
      lamination: this.lamination,
      construction: this.construction,
      frontLamination: this.frontLamination,
      backLamination: this.backLamination,
      edging: this.edging,
      baseMaterialId: this.baseMaterialId,
      baseMakeId: this.baseMakeId,
      baseMaterialThickness: this.baseMaterialThickness,
      baseSKUId: this.baseSKUId,
      baseSKU: this.baseSKU,
      backMaterialId: this.backMaterialId,
      backMakeId: this.backMakeId,
      backMaterialThickness: this.backMaterialThickness,
      backSKUId: this.backSKUId,
      backSKU: this.backSKU,
      frontFinishMaterialId: this.frontFinishMaterialId,
      frontFinishThickness: this.frontFinishThickness,
      frontFinishMakes: this.frontFinishMakes,
      glassMaterialId: this.glassMaterialId,
      glassMakeId: this.glassMakeId,
      glassSKUId: this.glassSKUId,
      glassSKU: this.glassSKU,
      glassThickness: this.glassThickness,
      EBMaterialId: this.EBMaterialId,
      EBMakeId: this.EBMakeId,
      EBWidth: this.EBWidth,
      EBThickness: this.EBThickness,
      EBSKUId: this.EBSKUId,
      EBSKU: this.EBSKU,
      frontFinishMakeId: this.frontFinishMakeId,
      frontFinishMake: this.frontFinishMake,
      glassRAL: this.glassRAL,
      frontFinishSKUId: this.frontFinishSKUId,
      frontFinishSKU: this.frontFinishSKU,
      frontShadeSwatch: this.frontShadeSwatch,
      grains: this.grains,
      SBSL: this.SBSL,
      backFinishMaterialId: this.backFinishMaterialId,
      backFinishMakeId: this.backFinishMakeId,
      backFinishThickness: this.backFinishThickness,
      backFinishSKUId: this.backFinishSKUId,
      backFinishSKU: this.backFinishSKU,
      backShades: this.backShades,
      backShadeSwatch: this.backShadeSwatch, // to be selected by user
      frontRAL: this.frontRAL,
      backRAL: this.backRAL,
      EBColor: this.EBColor,
      EBSwatch: this.EBSwatch,
      baseProfileMaterialId: this.baseProfileMaterialId,
      handleProfileMaterialId: this.handleProfileMaterialId,
      profileWidth: this.profileWidth,
      profileMakeId: this.profileMakeId,
      baseProfileSKUId: this.baseProfileSKUId,
      isPremiumProfile: this.isPremiumProfile,
      baseProfileSKU: this.baseProfileSKU,
      handleProfileSKUId: this.handleProfileSKUId,
      handleProfileSKU: this.handleProfileSKU,
      topCoatMaterialId: this.topCoatMaterialId,
      topCoatMakeId: this.topCoatMakeId,
      topCoatSKUId: this.topCoatSKUId,
      topCoatSKU: this.topCoatSKU,
      backCoatMaterialId: this.backCoatMaterialId,
      backCoatMake: this.backCoatMake,
      backCoatSKUId: this.backCoatSKUId,
      backCoatSKU: this.backCoatSKU,
      handleType: this.handleType,
      IPMaterialId: this.IPMaterialId,
      IPHandleMaterialId: this.IPHandleMaterialId,
      IPMakeId: this.IPMakeId,
      IPWidth: this.IPWidth,
      IPThickness: this.IPThickness,
      IPSKUId: this.IPSKUId, // to be selected by user
      IPSKU: this.IPSKU, // to be filled by user
      IPHandleSKUId: this.IPHandleSKUId,
      IPHandleSKU: this.IPHandleSKU, // to be filled by user
      profileHeight: this.profileHeight,
      wallHeightAdjustment: this.wallHeightAdjustment,

      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PiShutter', piShutterSchema)

export const schema = model.schema
export default model
