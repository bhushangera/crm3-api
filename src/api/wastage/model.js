import mongoose, { Schema } from 'mongoose'

const wastageSchema = new Schema({
  presetCode: {type:String},
  ccBaseWastage: {type: Number, default: 0},
  ccBackWastage: {type: Number, default: 0},
  ccLamWastage: {type: Number, default: 0},
  shBaseWastage: {type: Number, default: 0},
  shLamWastage: {type: Number, default: 0},
  ebWastage: {type: Number, default: 0},
  golaWastage: {type: Number, default: 0}, // gms / sqft
  profileWastage: {type: Number, default: 0},
  glassWastage: {type: Number, default: 0},
  sealerQty: {type: Number, default: 0},
  paintQty: {type: Number, default: 0},
  topCoatQty: {type: Number, default: 0},
  epoxyQty: {type: Number, default: 0},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

wastageSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      presetCode: this.presetCode,
      ccBaseWastage: this.ccBaseWastage,
      ccBackWastage: this.ccBackWastage,
      ccLamWastage: this.ccLamWastage,
      shBaseWastage: this.shBaseWastage,
      shLamWastage: this.shLamWastage,
      ebWastage: this.ebWastage,
      golaWastage: this.golaWastage,
      profileWastage: this.profileWastage,
      glassWastage: this.glassWastage,
      sealerQty: this.sealerQty,
      paintQty: this.paintQty,
      topCoatQty: this.topCoatQty,
      epoxyQty: this.epoxyQty,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Wastage', wastageSchema)

export const schema = model.schema
export default model
