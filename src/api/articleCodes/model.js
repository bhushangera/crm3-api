import mongoose, { Schema } from 'mongoose'

const articleCodesSchema = new Schema({
  seriesArticleId: {type: String},
  materialId: {type: String},
  material: {type: String}, // from brandSeries
  MCId: {type: String}, // do
  MCCode: {type: String}, // do
  SMCId: {type: String}, // do
  SMCCode: {type: String}, // do
  makeId: {type: String}, // do
  make: {type: String}, // do
  makeBrandId: {type: String}, // do
  brandSeriesId: {type: String}, // do
  article: {type: String}, // from seriesArticles
  series: {type: String}, // new addition from brandSeries
  articleNo: {type: String},
  SKU: {type: String}, // SMCCode-material-make-series-article-articleNo
  image: {type: String},
  isActive: {type: Boolean, default: true},
  fApplication: {type: String},
  EBSKU: {type: String},
  EBSKUacId: {type: String},
  THINNERSKU: {type: String},
  THINNERSKUacId: {type: String},
  targetLvl: {type: Number, defaul: 0},
  reorderLvl: {type: Number, defaul: 0},
  reorderQty: {type: Number, defaul: 0},

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

articleCodesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      seriesArticleId: this.seriesArticleId,
      materialId: this.materialId,
      material: this.material, // from brandSeries
      MCId: this.MCId, // do
      MCCode: this.MCCode, // do
      SMCId: this.SMCId, // do
      SMCCode: this.SMCCode, // do
      makeId: this.makeId, // do
      make: this.make, // do
      makeBrandId: this.makeBrandId, // do
      brandSeriesId: this.brandSeriesId, // do
      article: this.article, // from seriesArticles
      series: this.series, // new addition from brandSeries
      articleNo: this.articleNo,
      SKU: this.SKU, // SMCCode-material-make-series-article-articleNo
      image: this.image,
      isActive: this.isActive,
      fApplication: this.fApplication,
      EBSKU: this.EBSKU,
      EBSKUacId: this.EBSKUacId,
      THINNERSKU: this.THINNERSKU,
      THINNERSKUacId: this.THINNERSKUacId,
      targetLvl: this.targetLvl,
      reorderLvl: this.reorderLvl,
      reorderQty: this.reorderQty,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ArticleCodes', articleCodesSchema)

export const schema = model.schema
export default model
