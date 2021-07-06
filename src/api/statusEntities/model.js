import mongoose, { Schema } from "mongoose"

const statusEntitiesSchema = new Schema(
  {
    code: { type: String },
    description: { type: String },
    sortOrder: { type: Number },
    icon: { type: String },
    colorId: { type: String },
    background: { type: String },
    foreground: { type: String },
    group: { type: String },
    prefix: {type: String, trim: true},
    active: { type: Boolean, default: true }
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

statusEntitiesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      sortOrder: this.sortOrder,
      icon: this.icon,
      colorId: this.colorId,
      background: this.background,
      foreground: this.foreground,
      group: this.group,
      prefix: this.prefix,
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

const model = mongoose.model("StatusEntities", statusEntitiesSchema);

export const schema = model.schema;
export default model;
