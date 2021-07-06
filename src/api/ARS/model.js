import mongoose, { Schema } from 'mongoose'

const arsSchema = new Schema({
  ArticleId: { type: String },
  ArticleCode: { type: String },
  MId: { type: String },
  ARSCode: { type: String },
  baseMId: { type: String },
  baseMCode: { type: String },
  baseArticleId: { type: String },
  baseArticle: { type: String },
  baseThickness: { type: Number, default: 0 },
  backArticleId: { type: String },
  backArticle: { type: String },
  backThickness: { type: Number, default: 0 },

  baseMakeId: { type: String },
  baseMake: { type: String },
  baseMakeImage: { type: String },
  baseSeriesId: { type: String },
  baseSeries: { type: String },

  baseSKUId: { type: String },
  baseSKU: { type: String },
  baseSKUImage: { type: String },

  backSKUId: { type: String },
  backSKU: { type: String },
  backSKUImage: { type: String },

  backLinerSKUId: { type: String },
  backLinerSKUMakeId: { type: String },
  backlinerSKUImage: { type: String },
  backLinerSKU: { type: String },
  backLinerSKUThickness: { type: Number, default: 0 },
  backLinerSKUMake: { type: String },
  backLinerSKUMakeImage: { type: String },

  EType: { type: String }, // pre - preprocesed / process - needs processing
  BType: { type: String },
  backBType: { type: String },
  finishMId: { type: String },
  finishMCode: { type: String },
  finishArticleId: { type: String },
  finishArticle: { type: String },
  finishThickness: { type: String },
  SHBLinerMId: { type: String },
  SHBLinerMCode: { type: String },
  SHBLArticleId: { type: String },
  SHBLArticle: { type: String },
  SHBLThickness: { type: Number, default: 0 },
  // base rates
  RATE: { type: Number, default: 0 },
  RType: { type: String }, //
  unit: { type: String }, // pc|sqft|feet
  GST: { type: Number, default: 0 },
  // cc addons
  drw900: { type: Number, default: 0 },
  drw1200: { type: Number, default: 0 },
  drwI600: { type: Number, default: 0 },
  drwI600Plus: { type: Number, default: 0 },
  drwExtraH: { type: Number, default: 0 },
  drwHThreshold: { type: Number, default: 0 },
  shelfRate: { type: Number, default: 0 },
  shelfRate25mm: { type: Number, default: 0 },
  shelfRate36mm: { type: Number, default: 0 },
  shelfRate36Plus: { type: Number, default: 0 },
  ccHandleLessPlus: { type: Number, default: 0 },
  additionSplBack: { type: Number, default: 0 },
  minWidth: { type: Number, default: 0 },
  additionLessWidth: { type: Number, default: 0 },
  FCId: { type: String }, // finish code id
  FCCode: { type: String },
  FCDescription: { type: String },
  othMakeId: { type: String },
  othMakeCode: { type: String },

  vsRate: { type: Number, default: 0 },
  shExtraThickness: { type: Number, default: 0 },
  additionSameLiningSH: { type: Number, default: 0 },
  // edge band
  edgeFinish: { type: String }, // tape | paint | none;
  additonSplEB: { type: Number, default: 0 },
  PartyId: { type: String },
  ARSId: { type: String },
  rawRate: { type: Number, default: 0 },
  isActive: { type: Boolean, default: false },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

arsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      ArticleId: this.ArticleId,
      ArticleCode: this.ArticleCode,
      MId: this.MId,
      ARSCode: this.ARSCode,
      baseMId: this.baseMId,
      baseMCode: this.baseMCode,
      baseArticleId: this.baseArticleId,
      baseArticle: this.baseArticle,
      baseThickness: this.baseThickness,
      backArticleId: this.backArticleId,
      backArticle: this.backArticle,
      backThickness: this.backThickness,

      baseMakeId: this.baseMakeId,
      baseMake: this.baseMake,
      baseMakeImage: this.baseMakeImage,
      baseSeriesId: this.baseSeriesId,
      baseSeries: this.baseSeries,

      baseSKUId: this.baseSKUId,
      baseSKU: this.baseSKU,
      baseSKUImage: this.baseSKUImage,

      backSKUId: this.backSKUId,
      backSKU: this.backSKU,
      backSKUImage: this.backSKUImage,

      backLinerSKUId: this.backLinerSKUId,
      backLinerSKUMakeId: this.backLinerSKUMakeId,
      backlinerSKUImage: this.backlinerSKUImage,
      backLinerSKU: this.backLinerSKU,
      backLinerSKUThickness: this.backLinerSKUThickness,
      backLinerSKUMake: this.backLinerSKUMake,
      backLinerSKUMakeImage: this.backLinerSKUMakeImage,

      EType: this.EType,
      BType: this.BType,
      backBType: this.backBType,
      finishMId: this.finishMId,
      finishMCode: this.finishMCode,
      finishArticleId: this.finishArticleId,
      finishArticle: this.finishArticle,
      finishThickness: this.finishThickness,
      // base rates
      RATE: this.RATE,
      RType: this.RType,
      unit: this.unit,
      GST: this.GST,
      // cc addons
      drw900: this.drw900,
      drw1200: this.drw1200,
      drwI600: this.drwI600,
      drwI600Plus: this.drwI600Plus,
      drwExtraH: this.drwExtraH,
      drwHThreshold: this.drwHThreshold,
      shelfRate: this.shelfRate,
      shelfRate25mm: this.shelfRate25mm,
      shelfRate36mm: this.shelfRate36mm,
      shelfRate36Plus: this.shelfRate36Plus,
      ccHandleLessPlus: this.ccHandleLessPlus,
      additionSplBack: this.additionSplBack,
      minWidth: this.minWidth,
      additionLessWidth: this.additionLessWidth,
      FCId: this.FCId,
      FCCode: this.FCCode,
      FCDescription: this.FCDescription,
      othMakeId: this.othMakeId,
      othMakeCode: this.othMakeCode,

      vsRate: this.vsRate,
      shExtraThickness: this.shExtraThickness,
      additionSameLiningSH: this.additionSameLiningSH,
      // edge band
      edgeFinish: this.edgeFinish,
      additonSplEB: this.additonSplEB,
      PartyId: this.PartyId,
      ARSId: this.ARSId,
      rawRate: this.rawRate,
      isActive: this.isActive,
      SHBLinerMId: this.SHBLinerMId,
      SHBLinerMCode: this.SHBLinerMCode,
      SHBLArticleId: this.SHBLArticleId,
      SHBLArticle: this.SHBLArticle,
      SHBLThickness: this.SHBLThickness,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Ars', arsSchema)

export const schema = model.schema
export default model
