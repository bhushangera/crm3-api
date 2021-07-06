import mongoose, { Schema } from 'mongoose'

const tapeDecorSchema = new Schema({
  MakeId: { type: String },
  MakeCode: { type: String },
  MakeImage: { type: String },
  DNo: { type: String },
  DName: { type: String },
  Image: { type: String },
  displayName: { type: String },
  matt: { type: Boolean, default: false },
  gloss: { type: Boolean, default: false },
  highGloss: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

tapeDecorSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      MakeId: this.MakeId,
      MakeCode: this.MakeCode,
      MakeImage: this.MakeImage,
      DNo: this.DNo,
      DName: this.DName,
      Image: this.Image,
      displayName: this.displayName,
      matt: this.matt,
      gloss: this.gloss,
      highGloss: this.highGloss,
      active: this.active,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('TapeDecor', tapeDecorSchema)

export const schema = model.schema
export default model
