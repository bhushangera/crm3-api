import mongoose, { Schema } from "mongoose";

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

const model = mongoose.model("EntityGroups", entityGroupsSchema);

export const schema = model.schema;
export default model;
