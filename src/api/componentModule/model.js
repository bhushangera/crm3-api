import mongoose, { Schema } from "mongoose";

const componentModuleSchema = new Schema(
  {
    uuid: { type: String, trim: true },
    componentArticleId: { type: String, trim: true }, // master fields
    componentMaterialId: { type: String, trim: true }, // master fields
    moduleEntityId: { type: String, trim: true },
    moduleEntityCategoryId: { type: String, trim: true },
    moduleCategoryCodeId: { type: String, trim: true },
    moduleArticleId: { type: String, trim: true },
    moduleMaterialId: { type: String, trim: true },
    moduleArticleCode: { type: String, trim: true },
    moduleArticleDescription: { type: String, trim: true },
    moduleArticleImage: { type: String, trim: true },
    qty: { type: Number, default: 0 },
    isFOC: { type: Boolean, default: false },
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

componentModuleSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      componentArticleId: this.componentArticleId,
      componentMaterialId: this.componentMaterialId,
      moduleEntityId: this.moduleEntityId,
      moduleEntityCategoryId: this.moduleEntityCategoryId,
      moduleCategoryCodeId: this.moduleCategoryCodeId,
      moduleArticleId: this.moduleArticleId,
      moduleMaterialId: this.moduleMaterialId,
      moduleArticleCode: this.moduleArticleCode,
      moduleArticleDescription: this.moduleArticleDescription,
      moduleArticleImage: this.moduleArticleImage,
      qty: this.qty,
      isFOC: this.isFOC,
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

const model = mongoose.model("ComponentModule", componentModuleSchema);

export const schema = model.schema;
export default model;
