import mongoose, { Schema } from "mongoose";

const permissionsSchema = new Schema(
  {
    title: { type: String },
    roleId: { type: String },
    fmId: { type: String },
    code: { type: String },
    description: { type: String },
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

permissionsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      roleId: this.roleId,
      fmId: this.fmId,
      code: this.code,
      description: this.description,
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

const model = mongoose.model("Permissions", permissionsSchema);

export const schema = model.schema;
export default model;
