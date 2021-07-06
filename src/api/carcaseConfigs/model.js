import mongoose, { Schema } from 'mongoose'

const carcaseConfigsSchema = new Schema({
  configType: { type: String },
  configCode: { type: String },
  FML: { type: Number, default: 0 },
  FMR: { type: Number, default: 0 },
  BM: { type: Number, default: 0 },
  DBM: { type: Number, default: 0 },
  BGSD: { type: Number, default: 0 },
  BGST: { type: Number, default: 0 },
  DLA: { type: Number, default: 0 },
  DFML: { type: Number, default: 0 },
  DFMR: { type: Number, default: 0 },
  TSS: { type: Number, default: 0 },
  HM: { type: Number, default: 0 },
  grLeft: { type: Boolean, default: false },
  grRight: { type: Boolean, default: false },
  grTop: { type: Boolean, default: false },
  grBottom: { type: Boolean, default: false },
  shHeightAdj: { type: Number },
  shWidthAdj: { type: Number },
  shHeightAdj25mm: { type: Number },
  shWidthAdj25mm: { type: Number },
  shutterAdj: { type: Number },
  // stdBaseT: {type: Number, default: 0},
  FM: { type: Number, default: 0 },
  bslT: { type: Number, default: 0 },
  // new additions
  shStdHeight: { type: Number, default: 0 },
  shStdWidth: { type: Number, default: 0 },
  hingeGapHeight: { type: Number, default: 0 },
  hingeGapWidth: { type: Number, default: 0 }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

carcaseConfigsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      configType: this.configType,
      configCode: this.configCode,
      FML: this.FML,
      FMR: this.FMR,
      BM: this.BM,
      DBM: this.DBM,
      BGSD: this.BGSD,
      BGST: this.BGST,
      DLA: this.DLA,
      DFML: this.DFML,
      DFMR: this.DFMR,
      TSS: this.TSS,
      cProfile: this.cProfile,
      grLeft: this.grLeft,
      grRight: this.grRight,
      grTop: this.grTop,
      grBottom: this.grBottom,
      HM: this.HM,
      shHeightAdj: this.shHeightAdj,
      shWidthAdj: this.shWidthAdj,
      shHeightAdj25mm: this.shHeightAdj25mm,
      shWidthAdj25mm: this.shWidthAdj25mm,
      shutterAdj: this.shutterAdj,
      FM: this.FM,
      bslT: this.bslT,
      shStdHeight: this.shStdHeight,
      shStdWidth: this.shStdWidth,
      hingeGapHeight: this.hingeGapHeight,
      hingeGapWidth: this.hingeGapWidth,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('CarcaseConfigs', carcaseConfigsSchema)

export const schema = model.schema
export default model
