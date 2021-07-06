import mongoose, { Schema } from "mongoose";

const categoryCodesSchema = new Schema(
  {
    groupId: { type: String, trim: true },
    groupCode: { type: String, trim: true },
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    entityCategoryId: { type: String, trim: true },
    entityCategory: { type: String, trim: true },
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    active: { type: Boolean },
    hasMaterials: { type: Boolean, default: true },
    image: { type: String, trim: true }
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

categoryCodesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      groupId: this.groupId,
      groupCode: this.groupCode,
      entityId: this.entityId,
      entityCode: this.entityCode,
      sortOrder: this.sortOrder,
      entityCategoryId: this.entityCategoryId,
      entityCategory: this.entityCategory,
      code: this.code,
      description: this.description,
      active: this.active,
      image: this.image,
      hasMaterials: this.hasMaterials,
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

const model = mongoose.model("CategoryCodes", categoryCodesSchema);

export const schema = model.schema;
export default model;
