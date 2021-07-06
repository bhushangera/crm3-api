import mongoose, { Schema } from "mongoose";
import Make from "../make/model";
import CategoryCodes from "../CategoryCodes/model";

const materialDetailSchema = new Schema ({
  groupId: { type: String },
  groupCode: { type: String },
  groupType: { type: String },
  entityId: { type: String, trim: true },
  entityCode: { type: String, trim: true },
  entityCategoryId: String,
  entityCategoryCode: String,
  categoryCodeId: String,
  categoryCode: String,
  code: String,
  description: String,
  image: String,
  slug: String,
})
const cabMaterialSchema = new Schema({
  materialId: { type: String, trim: true },
  material: materialDetailSchema,
  grade: CategoryCodes.schema,
  thickness: { type: Number, default: 0 }, // 16
  brands: Make.schema,
  finish: CategoryCodes.schema
})

const priceVariantsSchema = new Schema(
  {
    materialId: { type: String, trim: true },
    material: materialDetailSchema,
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    base: cabMaterialSchema,
    back: cabMaterialSchema,
    frontLamination: cabMaterialSchema,
    backLamination: cabMaterialSchema,
    upholsty: cabMaterialSchema,
    cushion: cabMaterialSchema,
    frame: cabMaterialSchema,
    active: { type: Boolean, default: true },
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

priceVariantsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      materialId: this.materialId,
      code: this.code,
      description: this.description,
      base: this.base,
      back: this.back,
      frontLamination: this.frontLamination,
      backLamination: this.backLamination,
      upholsty: this.upholsty,
      cushion: this.cushion,
      frame: this.frame,
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

const model = mongoose.model("PriceVariants", priceVariantsSchema);

export const schema = model.schema;
export default model;
