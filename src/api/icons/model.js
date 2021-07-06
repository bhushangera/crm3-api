import mongoose, { Schema } from "mongoose";

const iconsSchema = new Schema(
  {
    selector: {
      type: String,
    },
    label: {
      type: String,
    },
    family: {
      type: String,
    }
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

iconsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      selector: this.selector,
      label: this.label,
      family: this.family,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("Icons", iconsSchema);

export const schema = model.schema;
export default model;
