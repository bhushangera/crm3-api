import mongoose, { Schema } from 'mongoose'
var autoIncrement = require('mongoose-auto-increment');
const channelsSchema = new Schema(
  {
    uuid: {type: String},
    CHTypeId: { type: String },
    HTypeId: { type: String },
    CHCode: { type: String },
    HTypeCode: { type: String },
    CHDescription: { type: String },
    HTypeDescription: { type: String },
    code: { type: String },
    description: { type: String },
    makeId: { type: String },
    makeCode: { type: String },
    makeImage: { type: String },
    CML: { type: Number, default: 0 }, // channel margin right
    CMR: { type: Number, default: 0 }, // channle margin left
    // for tandom
    ibaseHAdj: { type: Number, default: 0 },
    ibaseWAdj: { type: Number, default: 0 },
    ibackHAdj: { type: Number, default: 0 },
    ibackWAdj: { type: Number, default: 0 },
    // for sliders
    TDA: { type: Number, default: 0 },
    BDA: { type: Number, default: 0 },
    LDA: { type: Number, default: 0 },
    RDA: { type: Number, default: 0 },
    image: { type: String },
    cLength: {type: Number, default: 0},
    cHeight: {type: Number, default: 0}
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
channelsSchema.plugin(autoIncrement.plugin, {
  model: 'Channels',
  field: 'scrollNo',
  startAt: 100
});
channelsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      scrollNo: this.scrollNo,
      uuid: this.uuid,
      CHTypeId: this.CHTypeId,
      CHCode: this.CHCode,
      CHDescription: this.CHDescription,
      HTypeId: this.HTypeId,
      HTypeCode: this.HTypeCode,
      HTypeDescription: this.HTypeDescription,
      code: this.code,
      description: this.description,
      makeId: this.makeId,
      makeCode: this.makeCode,
      makeImage: this.makeImage,
      CML: this.CML,
      CMR: this.CMR,
      // for tandom
      ibaseHAdj: this.ibaseHAdj,
      ibaseWAdj: this.ibaseWAdj,
      ibackHAdj: this.ibackHAdj,
      ibackWAdj: this.ibackWAdj,
      // for sliders
      TDA: this.TDA,
      BDA: this.BDA,
      LDA: this.LDA,
      RDA: this.RDA,
      image: this.image,
      cLength: this.cLength,
      cHeight: this.cHeight,
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

const model = mongoose.model('Channels', channelsSchema)

export const schema = model.schema
export default model
