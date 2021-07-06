import mongoose, { Schema } from 'mongoose'
// import Entities from '../entities/model'
// import EntityCategory from '../entityCategory/model'
// import CategoryCodes from '../CategoryCodes/model'

export const componentPacksSchema = new Schema({
  itemNo: { type: Number, default: 0 },
  packCategoryId: { type: String, trim: true },
  makeId: { type: String, trim: true },
  packId: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  qty: { type: Number, default: 0 },
  foc: { type: Boolean, default: false },
  image: { type: String, trim: true }
})
const piModularComponentsSchema = new Schema({

  piId: {type: String, trim: true},
  itemNo: { type: Number, default: 0 },
  remarks: { type: String, trim: true },
  carcassId: { type: String, trim: true },
  shutterId: { type: String, trim: true },
  exposedId: { type: String, trim: true },
  entityId: { type: String, trim: true },
  // entity: Entities.schema,
  categoryId: { type: String, trim: true },
  // category: EntityCategory.schema,
  codeId: { type: String, trim: true },
  // code: CategoryCodes.schema,
  materialId: { type: String, trim: true },
  // material: Materials.schema,
  articleId: { type: String, trim: true },
  classification: { type: String, trim: true },
  unitType: { type: String, trim: true },
  instType: { type: String, trim: true },
  entitySelected: { type: Boolean, default: false },
  categorySelected: { type: Boolean, default: false },
  codeSelected: { type: Boolean, default: false },
  materialSelected: { type: Boolean, default: false },
  articleSelected: { type: Boolean, default: false },
  // article: Articles.schema,
  articleDetails: { type: String, trim: true },
  image: { type: String, trim: true },
  materialImage: { type: String, trim: true },

  // exposed sides
  hasExposedSides: { type: Boolean, default: false },
  openCarcass: { type: Boolean, default: false },
  carcassColor: { type: String, trim: true }, // shutter, carcass
  frontEdgeColor: { type: String, trim: true }, // shutter, carcass
  // exposedVariant: { type: Number, default: 0 },
  topExposed: { type: String, trim: true },
  bottomExposed: { type: String, trim: true },
  leftExposed: { type: String, trim: true },
  rightExposed: { type: String, trim: true },
  backExposed: { type: String, trim: true },
  shelfExposed: { type: String, trim: true },

  hasDrawer: { type: Boolean, default: false },
  hasHinges: { type: Boolean, default: false },
  hasAppliances: { type: Boolean, default: false },
  hasFittings: { type: Boolean, default: false },
  spLocation: { type: String, trim: true },

  // adjustments
  TDA: { type: Number, default: 0 },
  BDA: { type: Number, default: 0 },
  LDA: { type: Number, default: 0 },
  RDA: { type: Number, default: 0 },
  topDown: { type: Number, default: 0 },
  bottomUp: { type: Number, default: 0 },
  leftHAdj: { type: Number, default: 0 },
  rightHAdj: { type: Number, default: 0 },

  //
  fixedHeight: { type: Boolean, default: false },
  fixedWidth: { type: Boolean, default: false },
  fixedDepth: { type: Boolean, default: false },
  H: { type: Number, default: 0 },
  W: { type: Number, default: 0 },
  W1: { type: Number, default: 0 },
  D: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
  channelLenght: { type: Number, default: 0 }, // 470
  tandemLength: { type: Number, default: 0 }, // 470

  hingesPackId: { type: String, trim: true },
  hingesQty: { type: Number, default: 1 },
  appliancesPackId: { type: String, trim: true },
  appliancesQty: { type: Number, default: 1 },
  fittings: [componentPacksSchema]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

piModularComponentsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      piId: this.piId,
      itemNo: this.itemNo,
      remarks: this.remarks,
      carcassId: this.carcassId,
      shutterId: this.shutterId,
      exposedId: this.exposedId,
      entityId: this.entityId,
      // entity: this.entity,
      categoryId: this.categoryId,
      // category: this.category,
      codeId: this.codeId,
      // code: this.code,
      materialId: this.materialId,
      articleId: this.articleId,
      classification: this.classification,
      unitType: this.unitType,
      instType: this.instType,
      entitySelected: this.entitySelected,
      categorySelected: this.categorySelected,
      codeSelected: this.codeSelected,
      materialSelected: this.materialSelected,
      articleSelected: this.articleSelected,
      articleDetails: this.articleDetails,
      image: this.image,
      materialImage: this.materialImage,
      hasExposedSides: this.hasExposedSides,
      openCarcass: this.openCarcass,
      carcassColor: this.carcassColor,
      frontEdgeColor: this.frontEdgeColor,
      exposedVariant: this.exposedVariant,
      topExposed: this.topExposed,
      bottomExposed: this.bottomExposed,
      leftExposed: this.leftExposed,
      rightExposed: this.rightExposed,
      backExposed: this.backExposed,
      shelfExposed: this.shelfExposed,
      hasDrawer: this.hasDrawer,
      hasHinges: this.hasHinges,
      hasAppliances: this.hasAppliances,
      hasFittings: this.hasFittings,
      TDA: this.TDA,
      BDA: this.BDA,
      LDA: this.LDA,
      RDA: this.RDA,
      topDown: this.topDown,
      bottomUp: this.bottomUp,
      leftHAdj: this.leftHAdj,
      rightHAdj: this.rightHAdj,
      fixedHeight: this.fixedHeight,
      fixedWidth: this.fixedWidth,
      fixedDepth: this.fixedDepth,
      H: this.H,
      W: this.W,
      W1: this.W1,
      D: this.D,
      qty: this.qty,
      channelLenght: this.channelLenght,
      tandemLength: this.tandemLength,
      hingesPackId: this.hingesPackId,
      hingesQty: this.hingesQty,
      appliancesPackId: this.appliancesPackId,
      appliancesQty: this.appliancesQty,
      fittings: this.fittings,
      spLocation: this.spLocation,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PiModularComponents', piModularComponentsSchema)

export const schema = model.schema
export default model
