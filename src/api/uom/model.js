import mongoose, { Schema } from 'mongoose'

const uomSchema = new Schema({
  unitId: { type: Number },
  UTC: { type: Number },
  FUnitId: {type: String },
  FUnit: {type: String },
  FSymbol: {type: String },
  TUnitId: {type: String },
  TUnit: {type: String },
  TSymbol: {type: String },
  CF: {type: Number },
  CTU: {type: Number },
  description: {type: String },
  method: {type: String },
  trivia: {type: String },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

uomSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      unitId: this.unitId,
      UTC: this.UTC,
      FUnitId: this.FUnitId,
      FUnit: this.FUnit,
      FSymbol: this.FSymbol,
      TUnitId: this.TUnitId,
      TUnit: this.TUnit,
      TSymbol: this.TSymbol,
      CF: this.CF,
      CTU: this.CTU,
      description: this.description,
      trivia: this.trivia,
      method: this.method,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Uom', uomSchema)

export const schema = model.schema
export default model
