import mongoose, { Schema } from "mongoose";

const salutationsSchema = new Schema(
  {
    code: {
      type: String,
    },
    description: {
      type: String,
    },
    avatar: {
      type: String,
    },
    sex: { type: String },
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

salutationsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      avatar: this.avatar,
      sex: this.sex,
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

const model = mongoose.model("Salutations", salutationsSchema);

export const schema = model.schema;
export default model;
