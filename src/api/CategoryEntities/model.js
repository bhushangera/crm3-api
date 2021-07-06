import mongoose, { Schema } from "mongoose";

const categoryEntitiesSchema = new Schema(
  {
    code: { type: String },
    description: { type: String },
    sortOrder: { type: Number },
    active: { type: Boolean, default: false },
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

categoryEntitiesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      sortOrder: this.sortOrder,
      active: this.active,
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

const model = mongoose.model("CategoryEntities", categoryEntitiesSchema);

export const schema = model.schema;
export default model;
