import mongoose, { Schema } from "mongoose";
import Material from "../materials/model";
import PriceVariants from "../priceVariants/model";

const priceBookSchema = new Schema(
  {
   uuid: { type: String, trim: true },
    materialId: { type: String, trim: true },
    material: Material.schema,
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    varaintId: { type: String, trim: true },
    variant: PriceVariants.schema,
    materialCost: { type: Number, default: 0 }, // raw material cost
    factoryRate: { type: Number, default: 0 }, // raw material + overheads + productiion + packaging
    safeRate: { type: Number, default: 0 }, // fatory rate + operative margin
    duties: { type: Number, default: 0 }, // forex Factor + customDuty + exportDuty
    exportRate: { type: Number, default: 0 }, // listRate + duties
    stdDiscount: { type: Number, default: 0 }, // discount for dealer
    discType: { type: String, trim: true }, // static, percentage
    discount: { type: Number, default: 0 },
    listRate: { type: Number, default: 0 }, // fafeRate+ retailFactor
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

priceBookSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      materialId: this.materialId,
      material: this.variant,
      code: this.code,
      description: this.description,
      varaintId: this.varaintId,
      variant: this.variant,
      materialCost: this.materialCost,
      factoryRate: this.factoryRate,
      safeRate: this.safeRate,
      duties: this.duties,
      exportRate: this.exportRate,
      stdDiscount: this.stdDiscount,
      discType: this.discType,
      discount: this.discount,
      listRate: this.listRate,
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

const model = mongoose.model("PriceBook", priceBookSchema);

export const schema = model.schema;
export default model;
