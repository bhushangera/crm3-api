import mongoose, { Schema } from 'mongoose'

const componentStandardsSchema = new Schema({
  bcHeightStd: { type: Number, default: 0 },
  bcHeightMin: { type: Number, default: 0 },
  bcHeightMax: { type: Number, default: 0 },

  wcHeightStd: { type: Number, default: 0 },
  wcHeightMin: { type: Number, default: 0 },
  wcHeightMax: { type: Number, default: 0 },

  bcWidthStd: { type: Number, default: 0 },
  bcWidthMin: { type: Number, default: 0 },
  bcWidthMax: { type: Number, default: 0 },

  wcWidthStd: { type: Number, default: 0 },
  wcWidthMin: { type: Number, default: 0 },
  wcWidthMax: { type: Number, default: 0 },

  bcDepthStd: { type: Number, default: 0 },
  bcDepthMin: { type: Number, default: 0 },
  bcDepthMax: { type: Number, default: 0 },

  wcDepthStd: { type: Number, default: 0 },
  wcDepthMin: { type: Number, default: 0 },
  wcDepthMax: { type: Number, default: 0 }
})
const entityGroupsSchema = new Schema(
  {
    uuid: { type: String },
    code: { type: String },
    description: { type: String },
    // sortOrder: { type: Number },
    icon: { type: String, trim: true },
    colorId: { type: String, trim: true },
    background: { type: String, trim: true },
    foreground: { type: String, trim: true },
    groupType: { type: String, trim: true },
    image: { type: String, trim: true },
    active: { type: Boolean, default: false },
    componentStandards: {
      bcHeightStd: { type: Number, default: 0 },
      bcHeightMin: { type: Number, default: 0 },
      bcHeightMax: { type: Number, default: 0 },

      wcHeightStd: { type: Number, default: 0 },
      wcHeightMin: { type: Number, default: 0 },
      wcHeightMax: { type: Number, default: 0 },

      bcWidthStd: { type: Number, default: 0 },
      bcWidthMin: { type: Number, default: 0 },
      bcWidthMax: { type: Number, default: 0 },

      wcWidthStd: { type: Number, default: 0 },
      wcWidthMin: { type: Number, default: 0 },
      wcWidthMax: { type: Number, default: 0 },

      bcDepthStd: { type: Number, default: 0 },
      bcDepthMin: { type: Number, default: 0 },
      bcDepthMax: { type: Number, default: 0 },

      wcDepthStd: { type: Number, default: 0 },
      wcDepthMin: { type: Number, default: 0 },
      wcDepthMax: { type: Number, default: 0 }
    }
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

entityGroupsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      code: this.code,
      description: this.description,

      icon: this.icon,
      colorId: this.colorId,
      background: this.background,
      foreground: this.foreground,
      groupType: this.groupType,
      active: this.active,
      image: this.image,
      componentStandards: this.componentStandards,
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

const model = mongoose.model('EntityGroups', entityGroupsSchema)

export const schema = model.schema
export default model
