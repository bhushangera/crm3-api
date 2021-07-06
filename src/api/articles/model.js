import mongoose, { Schema } from 'mongoose'

export const compProsSchema = new Schema({

  channelLength: { type: Number, default: 450 },
  tandemLength: { type: Number, default: 470 },
  leg: { type: Number, default: 4 },
  bracket: { type: Number, default: 2 },
  hinges: { type: Number, default: 2 },
  height: {
    fixed: { type: Boolean, default: false },
    min: { type: Number, default: 300 },
    max: { type: Number, default: 900 },
    std: { type: Number, default: 720 }
  },
  width: {
    fixed: { type: Boolean, default: false },
    min: { type: Number, default: 100 },
    max: { type: Number, default: 1200 },
    std: { type: Number, default: 600 }
  },
  depth: {
    fixed: { type: Boolean, default: false },
    min: { type: Number, default: 300 },
    max: { type: Number, default: 600 },
    std: { type: Number, default: 560 }
  }
})
export const moduleProsSchema = new Schema({
  cabinatoryParameters: {
    BM: { type: Number, default: 0 },
    grDepth: { type: Number, default: 0 },
    grAdjustment: { type: Number, default: 0 },
    grTop: { type: Boolean, defualt: false },
    grBottom: { type: Boolean, defualt: false },
    grLeft: { type: Boolean, defualt: false },
    grRight: { type: Boolean, defualt: false },
    minifix: { type: Number, default: 12 },
    dowell: { type: Number, default: 8 },
    shelfPin: { type: Number, default: 4 },
    screw: { type: Number, default: 0 },
    drawer: {
      FML: { type: Number, default: 0 },
      FMR: { type: Number, default: 0 },
      DLA: { type: Number, default: 0 },
      packingAdj: { type: Number, default: 0 },
      depthAdj: { type: Number, default: 0 },
      isDoubleDrawer: { type: Boolean, default: false }
    },
    tandem: {
      backHeight: { type: Number, default: 0 }
    },
    shutter: {
      edgeBanding: { type: Boolean, default: false }, // tape, none
      EBThickness: { type: Number, default: 0 }
    }

  }
})
export const hwBundleSchema = new Schema({
  itemNo: { type: Number, default: 0 },
  categoryCodeId: { type: String, trim: true },
  hwPackId: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  makeId: { type: String, trim: true },
  makeCode: { type: String, trim: true },
  qty: { type: Number, default: 1 }
})
export const modulePartSchema = new Schema({
  itemNo: { type: Number, default: 0 },
  partCodeId: { type: String, trim: true }, // uuid fom material
  partCode: { type: String, trim: true }, // from material
  partCodeDescription: { type: String, trim: true },
  image: { type: String, trim: true },
  remarks: { type: String, trim: true },

  qty: { type: Number, default: 0 },
  groove: { type: Boolean, default: false },
  tapeF: { type: Boolean, default: false },
  tapeB: { type: Boolean, default: false },
  tapeL: { type: Boolean, default: false },
  tapeR: { type: Boolean, default: false },
  // shelf adjustments
  // stripWidth: { type: Number, default: 0 },

  faciaWAdj: { type: Number, default: 0 },
  PML: { type: Number, default: 0 },
  PMR: { type: Number, default: 0 },
  wPercent: { type: Number, default: 0 },
  hPercent: { type: Number, default: 0 },
  dPercent: { type: Number, default: 0 },
  wAdjustment: { type: Number, default: 0 },
  hAdjustment: { type: Number, default: 0 },
  dAdjustment: { type: Number, default: 0 },

  hinge: { type: Boolean, default: false },
  handle: { type: Boolean, default: false }
  // hingleLocation: { type: String, trim: true } // LH, RH
})
export const componentModuleSchema = new Schema({
  itemNo: { type: Number, default: 0 },
  entityId: { type: String, trim: true },
  categoryId: { type: String, trim: true },
  categoryCodeId: { type: String, trim: true },
  materialId: { type: String, trim: true },
  materialCode: { type: String, trim: true },
  materialDescription: { type: String, trim: true },
  materialImage: { type: String, trim: true },
  articleId: { type: String, trim: true },
  articleCode: { type: String, trim: true },
  articleDescription: { type: String, trim: true },
  articleImage: { type: String, trim: true },
  H: { type: Number, default: 0 },
  W: { type: Number, default: 0 },
  D: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
  isFOC: { type: Boolean, default: false },
  ccD: { type: Boolean, default: false },
  ccW: { type: Boolean, default: false },
  ccH: { type: Boolean, default: false }
})
const articlesSchema = new Schema(
  {
    uuid: { type: String, trim: true },
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    // materialproperties
    materialId: { type: String, trim: true },
    groupId: { type: String, trim: true },
    groupCode: { type: String, trim: true },
    groupType: { type: String, trim: true },
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    entityCategoryId: { type: String, trim: true },
    entityCategoryCode: { type: String, trim: true },

    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },

    materialCode: { type: String, trim: true },
    materialDescription: { type: String, trim: true },
    materialImage: { type: String, trim: true },
    image: { type: String, trim: true },
    componentProps: compProsSchema,
    moduleProps: moduleProsSchema,
    moduleParts: [modulePartSchema],
    moduleConsumables: [hwBundleSchema],
    componentFittings: [hwBundleSchema],
    componentHinges: [hwBundleSchema],
    componentAppliances: [hwBundleSchema],
    componentModules: [componentModuleSchema],
    active: { type: Boolean, default: true },
    checked: { type: Boolean, default: false },
    hasDrawers: { type: Boolean, default: false },
    hasHinges: { type: Boolean, default: false },
    hasAppliances: { type: Boolean, default: false },
    hasFittings: { type: Boolean, default: false },
    hasBifoldShutter: { type: Boolean, default: false },
    shutterType: { type: String, default: 'flat' }
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

articlesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      code: this.code,
      description: this.description,
      // materialproperties
      materialId: this.materialId,
      groupId: this.groupId,
      groupCode: this.groupCode,
      groupType: this.groupType,
      entityId: this.entityId,
      entityCode: this.entityCode,
      entityCategoryId: this.entityCategoryId,
      entityCategoryCode: this.entityCategoryCode,

      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,

      materialCode: this.materialCode,
      materialDescription: this.materialDescription,
      materialImage: this.materialImage,
      image: this.image,
      componentProps: this.componentProps,
      moduleProps: this.moduleProps,
      moduleParts: this.moduleParts,
      moduleConsumables: this.moduleConsumables,
      componentFittings: this.componentFittings,
      componentHinges: this.componentHinges,
      componentAppliances: this.componentAppliances,
      componentModules: this.componentModules,
      active: this.active,
      checked: this.checked,
      hasDrawers: this.hasDrawers,
      hasHinges: this.hasHinges,
      hasAppliances: this.hasAppliances,
      hasFittings: this.hasFittings,
      hasBifoldShutter: this.hasBifoldShutter,
      shutterType: this.shutterType,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? { ...view } : view
  }
}

const model = mongoose.model('Articles', articlesSchema)

export const schema = model.schema
export default model
