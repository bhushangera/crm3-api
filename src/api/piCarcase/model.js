import mongoose, { Schema } from 'mongoose'
import ShadeSwatches from '../shadeSwatches/model'
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
const piCarcaseSchema = new Schema({

  piId: { type: String, trim: true },
  itemNo: { type: Number, default: 0 },
  categoryCodeId: { type: String, trim: true },
  moduleVariantId: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true },

  operativeFactorId: { type: String, trim: true },
  factor: { type: Number, default: 0 },

  mechanism: { type: String, trim: true },
  psfFactoryRate: { type: String, trim: true },
  psfRate: { type: Number, default: 0 },
  ppBaseFactoryRate: { type: Number, default: 0 },
  ppBackFactoryRate: { type: Number, default: 0 },
  ppBaseRate: { type: Number, default: 0 },
  ppBackRate: { type: Number, default: 0 },
  billingUnit: { type: String, trim: true },
  // riders
  stdWidth: { type: Number, default: 0 },
  widthPlus: { type: Number, default: 0 },
  shelfRate: { type: Number, default: 0 },
  splBackPlus: { type: Number, default: 0 },
  drwHeight: { type: Number, default: 0 },
  drwHTPlus: { type: Number, default: 0 },
  drawerUnit: { type: String, trim: true },
  drwRate600: { type: Number, default: 0 },
  drwRate900: { type: Number, default: 0 },
  drwRate1200: { type: Number, default: 0 },
  stripRate: { type: Number, default: 0 },
  drwBillingUnit: { type: String, trim: true },
  stripUnit: { type: String, trim: true },
  hlPlus: { type: Number, default: 0 },
  rawBoard: { type: Number, default: 0 },
  stripWidth: { type: Number, default: 0 },

  baseThickness: { type: Number, default: 0 },
  backThickness: { type: Number, default: 0 },

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
  FEBThickness: { type: String, trim: true },
  BEBThickness: { type: String, trim: true },

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

  glassMaterialId: { type: String, trim: true },
  glassMakeId: { type: String, trim: true },
  glassMaterialThickness: { type: Number, default: 0 },
  glassSKUId: { type: String, trim: true },
  glassSKU: skuDetailsSchema,

  finishMaterialId: { type: String, trim: true },
  finishMakeId: { type: String, trim: true },
  finishMaterialThickness: { type: Number, default: 0 },
  finishSKUId: { type: String, trim: true },
  finishSKU: skuDetailsSchema,

  // to be filled on mv selection

  shadeSwatchId: { type: String, trim: true },
  shadeSwatch: ShadeSwatches.schema,

  EBSwatchId: { type: String, trim: true },
  EBSwatch: ShadeSwatches.schema,

  handleLess: { type: Boolean, default: false },
  handleLessWall: { type: Boolean, default: false },
  ohpAdj: { type: Number, defult: 0 },
  sideAdj: { type: Number, defult: 0 }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => {
      delete ret._id
    }
  }
})

piCarcaseSchema.methods = {
  view (full) {
    const view = {
      id: this.id,
      piId: this.piId,
      itemNo: this.itemNo,
      categoryCodeId: this.categoryCodeId,
      moduleVariantId: this.moduleVariantId,
      code: this.code,
      image: this.image,
      description: this.description,
      operativeFactorId: this.operativeFactorId,
      factor: this.factor,
      mechanism: this.mechanism,
      psfFactoryRate: this.psfFactoryRate,
      psfRate: this.psfRate,
      ppBaseFactoryRate: this.ppBaseFactoryRate,
      ppBackFactoryRate: this.ppBackFactoryRate,
      ppBaseRate: this.ppBaseRate,
      ppBackRate: this.ppBackRate,
      billingUnit: this.billingUnit,
      // riders
      stdWidth: this.stdWidth,
      widthPlus: this.widthPlus,
      shelfRate: this.shelfRate,
      splBackPlus: this.splBackPlus,
      drwHeight: this.drwHeight,
      drwHTPlus: this.drwHTPlus,
      drawerUnit: this.drawerUnit,
      drwRate600: this.drwRate600,
      drwRate900: this.drwRate900,
      drwRate1200: this.drwRate1200,
      stripRate: this.stripRate,
      drwBillingUnit: this.drwBillingUnit,
      stripUnit: this.stripUnit,
      hlPlus: this.hlPlus,
      rawBoard: this.rawBoard,
      stripWidth: this.stripWidth,
      baseThickness: this.baseThickness,
      backThickness: this.backThickness,
      lamination: this.lamination,
      laminationType: this.laminationType,
      edging: this.edging,
      FEBMaterialId: this.FEBMaterialId,
      BEBMaterialId: this.BEBMaterialId,
      EBMakeId: this.EBMakeId,
      FEBSKUId: this.FEBSKUId,
      FEBSKU: this.FEBSKU,
      BEBSKUId: this.BEBSKUId,
      BEBSKU: this.BEBSKU,
      FEBThickness: this.FEBThickness,
      BEBThickness: this.BEBThickness,
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
      finishMaterialId: this.finishMaterialId,
      finishMakeId: this.finishMakeId,
      finishMaterialThickness: this.finishMaterialThickness,
      finishSKUId: this.finishSKUId,
      finishSKU: this.finishSKU,
      shadeSwatchId: this.shadeSwatchId,
      shadeSwatch: this.shadeSwatch,
      EBSwatchId: this.EBSwatchId,
      EBSwatch: this.EBSwatch,
      handleLess: this.handleLess,
      handleLessWall: this.handleLessWall,
      glassMaterialId: this.glassMaterialId,
      glassMakeId: this.glassMakeId,
      glassMaterialThickness: this.glassMaterialThickness,
      glassSKUId: this.glassSKUId,
      glassSKU: this.glassSKU,
      ohpAdj: this.ohpAdj,
      sideAdj: this.sideAdj,
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

const model = mongoose.model('PiCarcase', piCarcaseSchema)

export const schema = model.schema
export default model
