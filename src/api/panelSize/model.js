import mongoose, { Schema } from "mongoose";

const panelSizeSchema = new Schema(
  {
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    width: {type: Number, default: 0},
    height: {type: Number, default: 0},
    area: { type: Number, default: 0 }, // in sqft
    active: { type: Boolean, default: true }, // in sqft
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

panelSizeSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      width: this.width,
      height: this.height,
      area: this.area, // in sqft
      active: this.active,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("PanelSize", panelSizeSchema);

export const schema = model.schema;
export default model;
