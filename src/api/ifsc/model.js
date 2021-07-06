import mongoose, { Schema } from 'mongoose'

const ifscSchema = new Schema(
  {
    BANK: { type: String },
    IFSC: { type: String },
    MICR: { type: String },
    BRANCH: { type: String },
    ADDRESS: { type: String },
    STD: { type: String },
    CONTACT: { type: String },
    CITY: { type: String },
    DISTRICT: { type: String },
    STATE: { type: String }
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

ifscSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      BANK: this.BANK,
      IFSC: this.IFSC,
      MICR: this.MICR,
      BRANCH: this.BRANCH,
      ADDRESS: this.ADDRESS,
      STD: this.STD,
      CONTACT: this.CONTACT,
      CITY: this.CITY,
      DISTRICT: this.DISTRICT,
      STATE: this.STATE,
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

const model = mongoose.model('Ifsc', ifscSchema)

export const schema = model.schema
export default model
