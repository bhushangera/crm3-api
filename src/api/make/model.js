import mongoose, { Schema } from 'mongoose'

const makeSchema = new Schema(
  {
    uuid: { type: String },
    code: { type: String },
    description: { type: String },
    slug: { type: String },
    isBaseProvider: { type: Boolean, default: false },
    isAccessoryProvider: { type: Boolean, default: false },
    isFinishingProvider: { type: Boolean, default: false },
    isHardwareProvider: { type: Boolean, default: false },
    isApplianceProvider: { type: Boolean, default: false },
    isEdgebandProvider: { type: Boolean, default: false },
    isChemicalProvider: { type: Boolean, default: false },
    isGlassProvider: { type: Boolean, default: false },
    isProfileProvider: { type: Boolean, default: false },
    others: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    logo: { type: String },
    series: [
      {
        id: String,
        code: String,
        description: String,
        dpDealer: { type: Number },
        dpStd: { type: Number },
        pDiscount: { type: Number },
        active: { type: Boolean, default: true }
      }
    ]
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

makeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      code: this.code,
      description: this.description,
      isBaseProvider: this.isBaseProvider,
      isAccessoryProvider: this.isAccessoryProvider,
      isFinishingProvider: this.isFinishingProvider,
      isHardwareProvider: this.isHardwareProvider,
      isApplianceProvider: this.isApplianceProvider,
      isEdgebandProvider: this.isEdgebandProvider,
      isChemicalProvider: this.isChemicalProvider,
      isGlassProvider: this.isGlassProvider,
      isProfileProvider: this.isProfileProvider,
      others: this.others,
      active: this.active,
      logo: this.logo,
      image: this.image,
      slug: this.slug,
      series: this.series,
      pDiscount: this.pDiscount,
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

const model = mongoose.model('Make', makeSchema)

export const schema = model.schema
export default model
