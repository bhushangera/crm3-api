import mongoose, { Schema } from 'mongoose'

const calenderMonthsSchema = new Schema({
  mNo: {type: Number},
  mWords: { type: String },
  mdays: { type: Number },
  active: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

calenderMonthsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      mNo: this.mNo,
      mWords: this.mWords,
      mdays: this.mdays,
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

const model = mongoose.model('CalenderMonths', calenderMonthsSchema)

export const schema = model.schema
export default model
