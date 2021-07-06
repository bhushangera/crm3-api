import mongoose, { Schema } from 'mongoose'

const hwpackdetailSchema = new Schema({
  hwPackId: {
    type: String
  },
  hwPackCode: {
    type: String
  },
  hwMId: {
    type: String
  },
  hwArticleId: {
    type: String
  },
  hwMakeId: {
    type: String
  },
  skuId: {
    type: String
  },
  skuDNo: {
    type: String
  },
  skuDName: {
    type: String
  },
  skuUnit: {
    type: String
  },
  skuImage: {
    type: String
  },
  skuMakeImage: {
    type: String
  },
  skuMake: {
    type: String
  },
  skuSeries: {
    type: String
  },
  calculateBy: { type: String },
  hwMaterial: {type: String},
  hwArticle: {type: String},    

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

hwpackdetailSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      hwPackId: this.hwPackId,
      hwPackCode: this.hwPackCode,
      hwMId: this.hwMId,
      hwArticleId: this.hwArticleId,
      hwMakeId: this.hwMakeId,
      skuId: this.skuId,
      skuDNo: this.skuDNo,
      skuDName: this.skuDName,
      skuUnit: this.skuUnit,
      skuImage: this.skuImage,
      skuMakeImage: this.skuMakeImage,
      skuMake: this.skuMake,
      skuSeries: this.skuSeries,
      calculateBy: this.calculateBy,
      hwMaterial: this.hwMaterial,
      hwArticle: this.hwArticle,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Hwpackdetail', hwpackdetailSchema)

export const schema = model.schema
export default model
