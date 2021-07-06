import mongoose, { Schema } from "mongoose";
import Entities from '../entities/model';
const entityStateSchema = new Schema(
  {
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    entity: { type: String, trim: true },
    entityDescription: { type: String, trim: true },
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    active: { type: Boolean, default: true },
    hasStatusCodes: {type: Boolean, default: false}
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

entityStateSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      entityId: this.entityId,
      entityCode: this.entityCode,
      entityDescription: this.entityDescription,
      code: this.code,
      description: this.description,
      active: this.active,
      entity: this.entity,
      hasStatusCodes: this.hasStatusCodes,
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

const model = mongoose.model("EntityState", entityStateSchema);

export const schema = model.schema;
export default model;
